package com.v1.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id; // int yerine Integer yaptık (Kritik nokta burası)

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

    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }

    // --- Helper Methods ---
    public String getPassword() {
        return this.passwordHash;
    }

    public void setPassword(String encodedPassword) {
        this.passwordHash = encodedPassword;
    }
}