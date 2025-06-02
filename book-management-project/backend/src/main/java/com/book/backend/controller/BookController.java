package com.book.backend.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.book.backend.domain.Book;
import com.book.backend.dto.BookDTO;
import com.book.backend.service.BookService;
import com.book.backend.service.ImageService;

import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;

import org.springframework.web.bind.annotation.RequestParam;

@RestController
@RequestMapping("/api/books")
@RequiredArgsConstructor
public class BookController {

    public final BookService bookService;
    public final ImageService imageService;

    // 도서 등록
    @PostMapping
    public ResponseEntity<Book> bookRegist(@Valid @RequestBody BookDTO.BookRegist dto) {
        Book bookRegist = bookService.bookRegist(dto);
        return ResponseEntity.status(HttpStatus.CREATED).body(bookRegist);
    }

    // 도서 목록 조회
    @GetMapping
    public ResponseEntity<List<BookDTO.BookList>> bookList() {
        List<BookDTO.BookList> books = bookService.bookList();
        return ResponseEntity.ok(books);
    }

    // 도서 정보 수정
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
    @PostMapping("/{id}/generate-cover")
    public ResponseEntity<String> bookCover(
        @PathVariable Long id,
        @RequestBody BookDTO.BookCoverRequest request) {  // @RequestParam -> @RequestBody + DTO
            String url = bookService.bookCover(id, request.getPrompt());
            return ResponseEntity.ok(url);
    }
}
