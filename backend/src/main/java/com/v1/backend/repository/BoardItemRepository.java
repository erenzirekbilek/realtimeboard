package com.v1.backend.repository;

import com.v1.backend.model.BoardItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import java.util.List;
import java.util.UUID;

@Repository
public interface BoardItemRepository extends JpaRepository<BoardItem, UUID> {
    // Tahtayı açtığımızda içindeki tüm şekilleri (kare, çizgi vs.) bununla çekeceğiz
    List<BoardItem> findByBoardId(UUID boardId);
}