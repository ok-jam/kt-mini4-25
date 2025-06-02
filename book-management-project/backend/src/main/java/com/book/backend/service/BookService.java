package com.book.backend.service;

import com.book.backend.domain.Book;
import com.book.backend.dto.BookDTO;

import java.util.List;

//import lombok.AllArgsConstructor;
//import lombok.Getter;
//import lombok.NoArgsConstructor;
//import lombok.Setter;
//
//import java.time.LocalDateTime;

public interface BookService {

    Book bookRegist(BookDTO.BookRegist dto);
    Book bookUpdate(Long id, BookDTO.BookUpdate dto);
    String bookCover(Long id, String prompt);
    List<BookDTO.BookList> bookList();
    BookDTO.BookDetail bookDetail(Long id);
    void bookDelete(Long id);
    void bookDeleteAll();
}
