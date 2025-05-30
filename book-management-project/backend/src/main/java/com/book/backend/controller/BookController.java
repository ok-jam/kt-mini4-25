package com.book.backend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;


@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/books")
public class BookController {

    @GetMapping
    public List<String> getBooks() {
        return List.of("도서 1", "도서 2", "도서 3");
    }
}
