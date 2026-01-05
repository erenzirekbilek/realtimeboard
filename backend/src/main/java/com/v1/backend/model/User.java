package com.v1.backend.model;

import jakarta.persistence.*;
import lombok.*;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id; // int yerine Integer yaptık (Kritik nokta burası)

    private boolean active;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(name = "password_hash", nullable = false)
    private String passwordHash;

    private String role;
    private String firstname;
    private String lastname;

    @Column(unique = true)
    private String username;

    // --- Helper Methods ---
    public String getPassword() {
        return this.passwordHash;
    }

    public void setPassword(String encodedPassword) {
        this.passwordHash = encodedPassword;
    }
}