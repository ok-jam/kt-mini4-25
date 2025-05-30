import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography, Container, Grid, Box, Button } from '@mui/material';
import BookCard from '../Components/BookCard';

function BookList() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/books")
            .then((res) => {
                console.log("응답 데이터:", res.data);
                setBooks(res.data);
            })
            .catch((err) => {
                console.error("백엔드 연결 실패:", err);
            });
        }, []);

    return (
        <Container>
            <Typography variant="h4" align="center" gutterBottom>작가의 산책</Typography>

            <Grid container spacing={2} justifyContent="center">
                {books.map((book, i) => (
                    <Grid item key={i}>
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
}

export default BookList;
