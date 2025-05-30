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

    // 도서 등록
    @PostMapping
    public ResponseEntity<Book> bookRegist(@RequestBody BookDTO.BookRegist dto) {
        Book bookRegist = bookService.bookRegist(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(bookRegist);
    }

    // 도서 목록 조회
    @GetMapping
    public ResponseEntity<List<BookDTO.BookList>> bookList() {
        List<BookDTO.BookList> books = bookService.bookList();
        return ResponseEntity.ok(books);
    }

    @PatchMapping("/{id}")
    public ResponseEntity<BookDTO.BookList> bookUpdate(@PathVariable Long id,
                                                       @RequestBody BookDTO.BookUpdate dto) {
        Book updated = bookService.bookUpdate(id, dto);
        return ResponseEntity.ok(new BookDTO.BookList(
                updated.getId(),
                updated.getTitle(),
                updated.getContent(),
                updated.getCoverImageUrl(),
                updated.getCreatedAt(),
                updated.getUpdatedAt()
        ));
    }

    // 도서 삭제
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteBook(@PathVariable Long id) {
        bookService.bookDelete(id);
        return ResponseEntity.noContent().build();
    }

    // 도서 조회
    @GetMapping("/{id}")
    public ResponseEntity<BookDTO.BookDetail> bookDetail(@PathVariable Long id) {
        BookDTO.BookDetail bookDetail = bookService.bookDetail(id);
        return ResponseEntity.ok(bookDetail);
    }

    // 표지 등록

}
