package com.v1.backend.controller;

import com.v1.backend.service.UserService;
import com.v1.backend.model.User;
// LoginRequest paket yolunu kendi projeninkine göre kontrol et!
import com.kindsonthegenius.product_app.model.LoginRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/users") // Artık tüm istekler /api/users ile başlar
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService){
        this.userService = userService;
    }

    // URL: GET http://localhost:8081/api/users
    @GetMapping
    public List<User> getUsers(){
        return userService.getUsers();
    }

    // URL: GET http://localhost:8081/api/users/1
    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@PathVariable("id") UUID id){
        User user = userService.getUser(id);
        if (user != null) {
            return ResponseEntity.ok(user);
        }
        return ResponseEntity.notFound().build();
    }

    // URL: POST http://localhost:8081/api/users/register
    @PostMapping("/register")
    public ResponseEntity<User> newUser(@RequestBody User user){
        User newUser = userService.addUser(user);
        return ResponseEntity.status(HttpStatus.CREATED).body(newUser);
    }

    // URL: PUT http://localhost:8081/api/users/1
    @PutMapping("/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user, @PathVariable("id") UUID id){
        user.setId(id); // ID'yi garantiye alıyoruz
        User updated = userService.updateUser(user);
        return ResponseEntity.ok(updated);
    }

    // URL: DELETE http://localhost:8081/api/users/1
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable("id") UUID id){
        userService.deleteUser(id);
        return ResponseEntity.noContent().build();
    }

    // URL: POST http://localhost:8081/api/users/login
    @PostMapping("/login")
    public ResponseEntity<String> login(@RequestBody LoginRequest loginRequest, HttpSession session) {
        try {
            boolean isAuthenticated = userService.authenticate(loginRequest.getUsername(), loginRequest.getPassword());

            if (isAuthenticated) {
                session.setAttribute("user", loginRequest.getUsername());
                return ResponseEntity.ok("Login was successful!");
            } else {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid username or password");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error: " + e.getMessage());
        }
    }
}