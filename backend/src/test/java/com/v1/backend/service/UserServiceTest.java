package com.v1.backend.service;

// === Importlar ===
// Test edilecek domain, repository ve security sınıfları
import com.v1.backend.model.User;
import com.v1.backend.repository.UserRepository;

// JUnit 5 test anotasyonları
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;

// Mockito anotasyonları
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

// Spring Security exception'ları
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.util.Optional;
import java.util.UUID;

// Assertion ve Mockito yardımcı metodları
import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

// Mockito'yu JUnit 5 ile entegre eder
@ExtendWith(MockitoExtension.class)
public class UserServiceTest {

    // === Mock'lar ===
    // Gerçek DB'ye gitmemesi için UserRepository mock'lanır
    @Mock
    private UserRepository userRepository;

    // Gerçek hash işlemi yapılmaması için encoder mock'lanır
    @Mock
    private BCryptPasswordEncoder passwordEncoder;

    // Test edilecek sınıf
    // @Mock ile oluşturulan bağımlılıklar buraya otomatik enjekte edilir
    @InjectMocks
    private UserService userService;

    // =====================================================
    // addUser() testi
    // =====================================================
    @Test
    void addUser_shouldEncodePasswordAndSaveUser() {

        // -------- GIVEN --------
        // Yeni bir kullanıcı oluşturulur (ham şifre ile)
        User user = new User();
        user.setPassword("123456");

        // Encoder çağrıldığında sahte hash döndürmesi sağlanır
        when(passwordEncoder.encode("123456"))
                .thenReturn("hashedPassword");

        // Repository save çağrıldığında aynı kullanıcıyı geri döndür
        when(userRepository.save(any(User.class)))
                .thenAnswer(invocation -> invocation.getArgument(0));

        // -------- WHEN --------
        // Service metodu çağrılır
        User savedUser = userService.addUser(user);

        // -------- THEN --------
        // Şifre hashlenmiş mi kontrol edilir
        assertEquals("hashedPassword", savedUser.getPasswordHash());

        // Encoder gerçekten çağrılmış mı
        verify(passwordEncoder).encode("123456");

        // Repository save çağrılmış mı
        verify(userRepository).save(user);
    }

    // =====================================================
    // authenticate() - başarılı login
    // =====================================================
    @Test
    void authenticate_shouldReturnTrue_whenCredentialsAreCorrect() {

        // -------- GIVEN --------
        String username = "eren";
        String rawPassword = "1234";
        String hashedPassword = "hashed1234";

        // DB'den dönecek kullanıcı simüle edilir
        User user = new User();
        user.setUsername(username);
        user.setPasswordHash(hashedPassword);

        // Repository kullanıcıyı bulsun
        when(userRepository.findByUsername(username))
                .thenReturn(user);

        // Şifre eşleşmesi başarılı olsun
        when(passwordEncoder.matches(rawPassword, hashedPassword))
                .thenReturn(true);

        // -------- WHEN --------
        boolean result = userService.authenticate(username, rawPassword);

        // -------- THEN --------
        // Login başarılı mı
        assertTrue(result);

        // Repository çağrıldı mı
        verify(userRepository).findByUsername(username);

        // Password karşılaştırması yapıldı mı
        verify(passwordEncoder).matches(rawPassword, hashedPassword);
    }

    // =====================================================
    // authenticate() - kullanıcı yok
    // =====================================================
    @Test
    void authenticate_shouldThrowException_whenUserNotFound() {

        // -------- GIVEN --------
        // Repository kullanıcıyı bulamasın
        when(userRepository.findByUsername("unknown"))
                .thenReturn(null);

        // -------- WHEN & THEN --------
        // Kullanıcı yoksa UsernameNotFoundException fırlatılmalı
        assertThrows(UsernameNotFoundException.class, () ->
                userService.authenticate("unknown", "1234")
        );
    }

    // =====================================================
    // authenticate() - şifre yanlış
    // =====================================================
    @Test
    void authenticate_shouldThrowException_whenPasswordIsWrong() {

        // -------- GIVEN --------
        User user = new User();
        user.setUsername("eren");
        user.setPasswordHash("hashed");

        // Kullanıcı DB'de var
        when(userRepository.findByUsername("eren"))
                .thenReturn(user);

        // Şifre eşleşmesi başarısız
        when(passwordEncoder.matches("wrongPassword", "hashed"))
                .thenReturn(false);

        // -------- WHEN & THEN --------
        // Şifre yanlışsa BadCredentialsException beklenir
        assertThrows(BadCredentialsException.class, () ->
                userService.authenticate("eren", "wrongPassword")
        );
    }

    // =====================================================
    // getUser() testi
    // =====================================================
    @Test
    void getUser_shouldReturnUser_whenUserExists() {

        // -------- GIVEN --------
        UUID id = UUID.randomUUID();
        User user = new User();
        user.setId(id);

        // Repository kullanıcıyı bulsun
        when(userRepository.findById(id))
                .thenReturn(Optional.of(user));

        // -------- WHEN --------
        User result = userService.getUser(id);

        // -------- THEN --------
        // Kullanıcı null olmamalı
        assertNotNull(result);

        // ID doğru mu
        assertEquals(id, result.getId());
    }
}
