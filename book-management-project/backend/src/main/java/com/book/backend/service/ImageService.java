package com.book.backend.service;

import com.book.backend.domain.Book;
import org.springframework.stereotype.Service;

import java.awt.*;

@Service
public class ImageService {

    public static String generatedCoverFor(Book book) {
        return "https://m.health.chosun.com/site/data/img_dir/2023/07/17/2023071701753_0" + book.getId() + ".jpg";
    }
}
