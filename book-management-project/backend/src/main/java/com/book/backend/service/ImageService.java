package com.book.backend.service;

import com.book.backend.domain.Book;
import org.springframework.stereotype.Service;

import java.awt.*;

@Service
public class ImageService {

    public static String generatedCoverFor(Book book) {
        return "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToKyZXTzFaRDVYt41xFGAhseK5qdchEwYzTQ&s" + book.getId() + ".jpg";
    }
}
