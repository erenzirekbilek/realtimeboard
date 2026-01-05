package com.v1.backend.controller;

import com.v1.backend.model.BoardItem;
import com.v1.backend.service.BoardItemService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/board-items")
@CrossOrigin(origins = "*")
public class BoardItemController {

    private final BoardItemService boardItemService;

    public BoardItemController(BoardItemService boardItemService) {
        this.boardItemService = boardItemService;
    }

    // Tahtaya yeni bir nesne (çizim) ekle
    @PostMapping("/{boardId}")
    public ResponseEntity<BoardItem> addItem(@PathVariable UUID boardId, @RequestBody BoardItem item) {
        return ResponseEntity.ok(boardItemService.addItem(boardId, item));
    }

    // Tahtadaki tüm nesneleri getir
    @GetMapping("/board/{boardId}")
    public ResponseEntity<List<BoardItem>> getItems(@PathVariable UUID boardId) {
        return ResponseEntity.ok(boardItemService.getItemsByBoard(boardId));
    }

    // Bir nesneyi sil (Örn: Silgi aracı kullanıldığında)
    @DeleteMapping("/{itemId}")
    public ResponseEntity<Void> deleteItem(@PathVariable UUID itemId) {
        boardItemService.deleteItem(itemId);
        return ResponseEntity.noContent().build();
    }
}