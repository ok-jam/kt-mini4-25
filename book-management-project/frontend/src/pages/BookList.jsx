import React, { useEffect, useState } from 'react';
import { Button, Container, Typography, Box, Grid } from '@mui/material';
import BookCard from '../Components/BookCard';
import { getBooks } from '../api/Bookservice';  // API 호출 함수

const BookList = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
    // 도서 목록 API 호출
    getBooks().then(data => {
        setBooks(data);
    });
    }, []);

    return (
    <Container>
        <Typography variant="h4" align="center" gutterBottom>
        작가의 산책
        </Typography>

        <Grid container spacing={2} justifyContent="center">
            {books.map((book, index) => (
                <Grid item key={book.id || index}>
                    <BookCard title={book.title} />
                </Grid>
        ))}
        </Grid>

        <Box mt={4} display="flex" justifyContent="center" gap={2}>
            <Button variant="outlined">도서 등록</Button>
            <Button variant="outlined">도서 조회</Button>
            <Button variant="outlined">표지 등록</Button>
            <Button variant="outlined" color="error">도서 삭제</Button>
        </Box>
    </Container>
    );
};

export default BookList;
