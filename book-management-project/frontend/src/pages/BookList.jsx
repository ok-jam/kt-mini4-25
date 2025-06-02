import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import HomeButton from '../Components/HomeButton';
import theme from './theme.ts';
import { ThemeProvider } from '@emotion/react';
import {
  Button,
  Typography,
  Card,
  CardContent,
  Container,
  Box,
  Stack,
  Grid,
  Checkbox
} from '@mui/material';

function BookList() {
    const [books, setBooks] = useState([]);
    const [selectedBookId, setSelectedBookId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchBooks();
    }, []);

    const fetchBooks = () => {
        axios.get('http://localhost:8080/api/books')
            .then((res) => setBooks(res.data))
            .catch((err) => console.error('백엔드 연결 실패:', err));
    };

    const handleDelete = () => {
        if (!selectedBookId) {
            alert("삭제할 도서를 선택해주세요.");
            return;
        }
        if (window.confirm('정말 삭제하시겠습니까?')) {
            axios.delete(`http://localhost:8080/api/books/${selectedBookId}`)
                .then(() => {
                    alert('삭제 완료!');
                    fetchBooks();
                    setSelectedBookId(null);
                })
                .catch((err) => console.error('삭제 실패:', err));
        }
    };

    const handleView = () => {
        if (!selectedBookId) {
            alert("조회할 도서를 선택해주세요.");
            return;
        }
        navigate(`/detail/${selectedBookId}`);
    };

    const handleCheck = (bookId) => {
        setSelectedBookId((prev) => (prev === bookId ? null : bookId));
    };

    // 표지 생성 추가
    const handleGenerateCover = () => {
        if (!selectedBookId) {
            alert("표지를 생성할 도서를 선택해주세요.");
            return;
        }
        axios.post(`http://localhost:8080/api/books/${selectedBookId}/generate-cover`)
            .then((res) => {
                alert('표지가 생성되었습니다.');
                fetchBooks();
            })
            .catch((err) => {
                console.error('표지 생성 실패:', err);
                alert('표지 생성 실패');
            });
    };

    return (
        <ThemeProvider theme={theme}>
            <Container maxWidth="md">
                <Box py={4}>
                    <Typography variant="h1" gutterBottom sx={{textAlign: "center"}}>
                        작가의 산책
                    </Typography>

                    <Grid container spacing={3}>
                        {books.map((book) => (
                            <Grid item xs={12} sm={6} md={4} key={book.id}>
                                <Card
                                    sx={{
                                    height: 250, // 카드 높이 고정
                                    width: 200,
                                    display: 'flex', // Flex 컨테이너로 설정
                                    flexDirection: 'column', // 수직 정렬
                                    justifyContent: 'space-between', // 공간 균등 분배
                                    border: selectedBookId === book.id ? '2px solid #1976d2' : '1px solid #e0e0e0',
                                    boxShadow: selectedBookId === book.id ? '0 4px 20px rgba(25, 118, 210, 0.3)' : '0 2px 8px rgba(0, 0, 0, 0.1)',
                                    transition: 'all 0.3s',
                                    backgroundColor: selectedBookId === book.id ? '#e3f2fd' : '#fff',
                                    cursor: 'pointer',
                                        '&:hover': {
                                            boxShadow: '0 4px 20px rgba(25, 118, 210, 0.3)',
                                        },
                                    }}
                                    onClick={() => handleCheck(book.id)}
                                >
                                    {book.coverImageUrl ? (
                                        <Box
                                            component="img"
                                            src={book.coverImageUrl}
                                            alt={book.title}
                                            sx={{
                                            width: '100%',
                                            height: 140,
                                            objectFit: 'cover', // 이미지 비율 유지
                                            }}
                                        />
                                        ) : (
                                        <Box
                                            sx={{
                                            width: '100%',
                                            height: 140,
                                            backgroundColor: '#f0f0f0', // 비어있을 때 색상
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            color: '#aaa',
                                            fontSize: 14,
                                            }}
                                        >
                                            이미지 없음
                                        </Box>
                                        )}
                                    <CardContent>
                                    <Stack direction="row" alignItems="center" spacing={1}>
                                        <Checkbox
                                        checked={selectedBookId === book.id}
                                        onChange={() => handleCheck(book.id)}
                                        onClick={(e) => e.stopPropagation()} // 클릭 전파 방지
                                        />
                                        <Box>
                                        <Typography variant="h6">{book.title}</Typography>
                                        <Typography variant="body2" color="text.secondary">{book.content}</Typography>
                                        </Box>
                                    </Stack>
                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>



                    <Stack direction="row" spacing={2} justifyContent="center" mt={4}>
                        <Button variant="contained" onClick={() => navigate('/create')}>도서 등록</Button>
                        <Button variant="contained" onClick={handleView}>도서 조회</Button>
                        <Button variant="contained" onClick={handleGenerateCover}>표지 등록</Button>

                        <Button variant="outlined" color="error" onClick={handleDelete}>도서 삭제</Button>
                    </Stack>
                </Box>
            </Container>
        </ThemeProvider>
    );
}

export default BookList;
