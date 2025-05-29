package com.book.backend.service;

import com.book.backend.domain.Book;
import com.book.backend.dto.BookDTO;
import com.book.backend.repository.BookRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

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
    public List<BookDTO.BookList> findAll() {
        return bookRepository.findAll().stream()
                .map(b -> new BookDTO.BookList(
                        b.getId(), b.getTitle(), b.getContent(),
                        b.getCoverImageUrl(), b.getCreatedAt(), b.getUpdatedAt()))
                .toList();
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
