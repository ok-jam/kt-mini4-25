package com.book.backend.service;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.book.backend.domain.Book;
import com.book.backend.dto.BookDTO;
import com.book.backend.repository.BookRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;
    private final ImageService imageService;

    @Override
    public Book bookRegist(BookDTO.BookRegist dto) {
        Book book = new Book();
        book.setTitle(dto.getTitle());
        book.setContent(dto.getContent());
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
    public String bookCover(Long id, String prompt) {
        Book book = bookRepository.findById(id).orElseThrow(() -> new RuntimeException("책이 없습니다."));

        try {
            String coverUrl = imageService.generateImageAndSaveToLocal(book, prompt);
            String fullUrl = "http://localhost:8080" + coverUrl;
            book.setCoverImageUrl(fullUrl);
            bookRepository.save(book);
            return coverUrl;
        } catch (Exception e) {
            throw new RuntimeException("커버 생성 실패", e);
        }
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

    @Override
    public void bookDeleteAll() {
        bookRepository.deleteAll();
    }
}
