package com.book.backend.controller; // ← 실제 경로에 맞게 수정하세요

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/books")
public class BookController {

    @GetMapping
    public List<String> getBooks() {
        return List.of("도서 1", "도서 2", "도서 3");
    }
}
