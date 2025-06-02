package com.book.backend.service;

import com.book.backend.domain.Book;
//import jakarta.validation.Path;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.ParameterizedTypeReference;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.ExchangeStrategies;
import org.springframework.web.reactive.function.client.WebClient;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.nio.file.Path;
import java.util.*;

@Service
public class ImageService {

    @Value("${openai.api.key}")
    private String apiKey;

    private WebClient openaiClient;

    @PostConstruct
    public void init() {
        ExchangeStrategies strategies = ExchangeStrategies.builder()
                .codecs(configurer -> configurer
                        .defaultCodecs()
                        .maxInMemorySize(10 * 1024 * 1024))
                .build();

        this.openaiClient = WebClient.builder()
                .baseUrl("https://api.openai.com/v1/images/generations")
                .defaultHeader(HttpHeaders.AUTHORIZATION, "Bearer " + apiKey)
                .defaultHeader(HttpHeaders.CONTENT_TYPE, MediaType.APPLICATION_JSON_VALUE)
                .exchangeStrategies(strategies)
                .build();
    }

    public String generateImageAndSaveToLocal(Book book, String userPrompt) throws IOException {

        String basePrompt = String.format(
            "Create a book cover for a book titled \"%s\" with the content: \"%s\".",
            book.getTitle(),
            book.getContent()
        );

        String finalPrompt = (userPrompt != null && !userPrompt.isEmpty())
            ? basePrompt + " " + userPrompt
            : basePrompt;

        // 1. OpenAI API 호출
        Map<String, Object> request = Map.of(
                "model", "dall-e-3",
                "prompt", finalPrompt,
                "n", 1,
                "size", "1024x1024",
                "response_format", "b64_json"
        );

        Map<String, Object> response = openaiClient.post()
                .bodyValue(request)
                .retrieve()
                .bodyToMono(new ParameterizedTypeReference<Map<String, Object>>() {})
                .block();

        // 2. 이미지 URL 추출
        ObjectMapper mapper = new ObjectMapper();
        Object dataObj = (response != null) ? response.get("data") : null;

        List<Map<String, String>> data = mapper.convertValue(
                dataObj,
                new TypeReference<>() {}
        );
        String base64Image = data.get(0).get("b64_json");

        // 3. 이미지 다운로드
        byte[] imageBytes = Base64.getDecoder().decode(base64Image);

        // 4. 로컬 파일 저장
        String fileName = "cover-" + book.getId() + ".jpg";
        Path uploadPath = Paths.get("uploads");
        if (!Files.exists(uploadPath)) {
            Files.createDirectories(uploadPath);
        }
        Path filePath = uploadPath.resolve(fileName);
        Files.write(filePath, imageBytes);

        // 5. 반환할 URL 경로
        return "/uploads/" + fileName;
    }
}
