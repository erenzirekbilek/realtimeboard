package com.v1.backend.service;

import com.v1.backend.model.Board;
import com.v1.backend.model.BoardItem;
import com.v1.backend.repository.BoardItemRepository;
import com.v1.backend.repository.BoardRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import java.util.List;
import java.util.UUID;

@Service
public class BoardItemService {

    private final BoardItemRepository boardItemRepository;
    private final BoardRepository boardRepository;

    public BoardItemService(BoardItemRepository boardItemRepository, BoardRepository boardRepository) {
        this.boardItemRepository = boardItemRepository;
        this.boardRepository = boardRepository;
    }

    // 1. Yeni Çizim/Nesne Ekleme
    public BoardItem addItem(UUID boardId, BoardItem item) {
        Board board = boardRepository.findById(boardId)
                .orElseThrow(() -> new RuntimeException("Tahta bulunamadı! ID: " + boardId));

        item.setBoard(board);
        return boardItemRepository.save(item);
    }

    // 2. Tahtadaki Tüm Nesneleri Getirme
    public List<BoardItem> getItemsByBoard(UUID boardId) {
        return boardItemRepository.findByBoardId(boardId);
    }

    // 3. Nesne Silme (Boş kalmıştı, doldurduk)
    @Transactional
    public void deleteItem(UUID itemId) {
        if (!boardItemRepository.existsById(itemId)) {
            throw new RuntimeException("Silinecek nesne bulunamadı! ID: " + itemId);
        }
        boardItemRepository.deleteById(itemId);
    }

    // 4. Nesne Güncelleme (Realtime taşıma/renk değişimi için şart!)
    @Transactional
    public BoardItem updateItem(UUID itemId, BoardItem itemDetails) {
        BoardItem existingItem = boardItemRepository.findById(itemId)
                .orElseThrow(() -> new RuntimeException("Güncellenecek nesne bulunamadı!"));

        // Sadece değişebilecek alanları güncelliyoruz
        existingItem.setX(itemDetails.getX());
        existingItem.setY(itemDetails.getY());
        existingItem.setContent(itemDetails.getContent()); // JSONB içeriği (renk, boyut vb.)

        return boardItemRepository.save(existingItem);
    }
}