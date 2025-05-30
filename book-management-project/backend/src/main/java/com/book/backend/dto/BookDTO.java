package com.book.backend.dto;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

public class BookDTO {

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class BookRegist {  // Post
        @NotBlank(message = "제목을 입력하세요.")
        private String title;

        @NotBlank(message = "내용을 입력하세요.")
        private String content;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class BookUpdate {  // Patch
        private String title;
        private String content;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class BookList {
        private Long id;
        private String title;
        private String content;
        private String coverImageUrl;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class BookDetail {
        private Long id;
        private String title;
        private String content;
        private String coverImageUrl;
        private LocalDateTime createdAt;
        private LocalDateTime updatedAt;
    }

    @Getter
    @Setter
    @NoArgsConstructor
    @AllArgsConstructor
    public static class BookCover {
        private Long id;
        private String coverImageUrl;
    }
}
