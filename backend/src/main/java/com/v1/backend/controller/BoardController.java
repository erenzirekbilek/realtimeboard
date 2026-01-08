package com.v1.backend.controller;

import com.v1.backend.model.Board;
import com.v1.backend.service.BoardService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/boards") // Postman'de çağırdığın yol burası!
@CrossOrigin(origins = "*")
public class BoardController {

    private final BoardService boardService;

    public BoardController(BoardService boardService) {
        this.boardService = boardService;
    }

    // Yeni tahta oluşturmak için (Önce bunu yapmalısın)
    @PostMapping("/{ownerId}")
    public ResponseEntity<Board> createBoard(@PathVariable UUID ownerId, @RequestParam String title) {
        return ResponseEntity.ok(boardService.createBoard(title, ownerId));
    }

    // Tüm tahtaları listelemek için
    @GetMapping
    public ResponseEntity<List<Board>> getAllBoards() {
        return ResponseEntity.ok(boardService.getAllBoards());
    }
}