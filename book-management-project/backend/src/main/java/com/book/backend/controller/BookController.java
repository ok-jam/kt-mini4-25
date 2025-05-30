package com.book.backend.controller;

import java.util.List;

import com.book.backend.domain.Book;
import com.book.backend.dto.BookDTO;
import com.book.backend.service.BookService;
import lombok.RequiredArgsConstructor;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/books")
@RequiredArgsConstructor
public class BookController {

    public final BookService bookService;

//    @GetMapping
//    public List<String> getBooks() {
//        return List.of("도서 1", "도서 2", "도서 3");
//    }

    //도서 등록
    @PostMapping
    public ResponseEntity<Book> bookRegist(@RequestBody BookDTO.BookRegist dto) {
        Book bookRegist = bookService.bookRegist(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(bookRegist);
    }

    //도서 수정
    @PatchMapping("/{id}")
    public ResponseEntity<Book> bookUpdate(@PathVariable Long id, @RequestBody BookDTO.BookUpdate dto) {
        Book bookUpdate = bookService.bookUpdate(id, dto);
        return ResponseEntity.ok(bookUpdate);
    }

//    //도서 조회
//    @GetMapping("/{id}")
//    public ResponseEntity<BookDTO.BookDetail> getBookDetail(@PathVariable Long id) {
//        BookDTO.BookDetail bookDetail = bookService.bookDetail(id);
//        return ResponseEntity.ok(bookDetail);
//    }

    @GetMapping
    public ResponseEntity<List<BookDTO.BookList>> bookList() {
        List<BookDTO.BookList> books = bookService.bookList();
        return ResponseEntity.ok(books);
    }
}
