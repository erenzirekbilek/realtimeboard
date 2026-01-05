package com.v1.backend.repository;

import com.v1.backend.model.Board;
import com.v1.backend.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.UUID;

public interface BoardRepository extends JpaRepository<Board, UUID> {
    // Belirli bir kullanıcıya ait tüm tahtaları bulmak için:
    List<Board> findByOwner(User owner);
}