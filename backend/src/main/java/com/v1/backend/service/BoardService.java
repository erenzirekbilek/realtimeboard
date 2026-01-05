package com.v1.backend.service;

import com.v1.backend.model.Board;
import com.v1.backend.model.User;
import com.v1.backend.repository.BoardRepository;
import com.v1.backend.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.UUID;

@Service
public class BoardService {

    private final BoardRepository boardRepository;
    private final UserRepository userRepository;

    public BoardService(BoardRepository boardRepository, UserRepository userRepository) {
        this.boardRepository = boardRepository;
        this.userRepository = userRepository;
    }

    public Board createBoard(String title, UUID ownerId) {
        User owner = userRepository.findById(ownerId)
                .orElseThrow(() -> new RuntimeException("Kullanıcı bulunamadı!"));

        Board board = new Board();
        board.setTitle(title);
        board.setOwner(owner);

        return boardRepository.save(board);
    }

    public List<Board> getAllBoards() {
        return boardRepository.findAll();
    }
}