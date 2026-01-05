package com.v1.backend.service;

import com.v1.backend.model.User;
import com.v1.backend.repository.UserRepository;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final UserRepository userRepository;

    // Tek ve düzgün constructor
    public UserService(UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    // Tüm kullanıcıları getir
    public List<User> getUsers() {
        return userRepository.findAll();
    }

    // Tek bir kullanıcıyı ID ile getir
    public User getUser(Integer id) {
        return userRepository.findById(id).orElse(null);
    }

    // Yeni kullanıcı ekle (Kayıt)
    public User addUser(User user) {
        // Kullanıcının JSON ile gönderdiği ham şifreyi alıp BCrypt ile hashliyoruz
        String encodedPassword = bCryptPasswordEncoder.encode(user.getPassword());
        user.setPasswordHash(encodedPassword);
        return userRepository.save(user);
    }

    // Kullanıcı güncelle
    public User updateUser(User user) {
        // Kullanıcı var mı kontrolü
        Optional<User> existingUser = userRepository.findById(user.getId());
        if (existingUser.isPresent()) {
            return userRepository.save(user);
        }
        return null;
    }

    // Kullanıcı sil
    public void deleteUser(Integer id) {
        userRepository.deleteById(id);
    }

    // Giriş (Login) kontrolü
    public boolean authenticate(String username, String password) {
        User user = userRepository.findByUsername(username);

        // Kullanıcı yoksa hata fırlat
        if (user == null) {
            throw new UsernameNotFoundException("User does not exist in the database");
        }

        // Ham şifre ile DB'deki hashlenmiş şifreyi karşılaştır
        if (!bCryptPasswordEncoder.matches(password, user.getPasswordHash())) {
            throw new BadCredentialsException("The password is incorrect");
        }

        return true;
    }
}