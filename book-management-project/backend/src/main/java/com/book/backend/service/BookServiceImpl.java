package com.book.backend.service;

import com.book.backend.domain.Book;
import com.book.backend.dto.BookDTO;
import com.book.backend.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    @Override
    public Book bookRegist(BookDTO.BookRegist dto) {
        Book book = new Book();
        book.setTitle(dto.getTitle());
        book.setContent(dto.getContent());
//        book.setCoverImageUrl();
        return bookRepository.save(book);
    }

    @Override
    public Book bookUpdate(Long id, BookDTO.BookUpdate dto) {
        Book book = bookRepository.findById(id).orElseThrow();
        book.setTitle(dto.getTitle());
        book.setContent(dto.getContent());
        return bookRepository.save(book);
    }

    @Override
    public Book bookCover(Long id, BookDTO.BookCover dto) {
        Book book = bookRepository.findById(id).orElseThrow();
        book.setCoverImageUrl(dto.getCoverImageUrl());
        return bookRepository.save(book);
    }

    @Override
    public List<BookDTO.BookList> bookList() {
        List<Book> books = bookRepository.findAll();
        return books.stream()
                .map(book -> new BookDTO.BookList(
                        book.getId(),
                        book.getTitle(),
                        book.getContent(),
                        book.getCoverImageUrl(),
                        book.getCreatedAt(),
                        book.getUpdatedAt()
                ))
                .collect(Collectors.toList());
    }

    @Override
    public BookDTO.BookDetail bookDetail(Long id) {
        Book book = bookRepository.findById(id).orElseThrow();
        return new BookDTO.BookDetail(
                book.getId(), book.getTitle(), book.getContent(), book.getCoverImageUrl(),
                book.getCreatedAt(), book.getUpdatedAt()
        );
    }

    @Override
    public void bookDelete(Long id) {
        bookRepository.deleteById(id);
    }
}
