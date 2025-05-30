import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookList.css';
import HomeButton from '../Components/HomeButton';
import theme from './theme.ts';
import { ThemeProvider } from '@emotion/react';
import Button from '@mui/material/Button'

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
        console.log(`선택된 도서 ID: ${selectedBookId}`);
        console.log(`요청 URL: http://localhost:8080/api/books/${selectedBookId}`);
        if (window.confirm('정말 삭제하시겠습니까?')) {
            axios.delete(`http://localhost:8080/api/books/${selectedBookId}`)
                .then(() => {
                    alert('삭제 완료!');
                    fetchBooks();
                    setSelectedBookId(null); // 초기화
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

    return (
        <ThemeProvider theme={theme}>
            <div className="main-container">
                <HomeButton/>
                <h1 className="title">작가의 산책</h1>

            <div className="card-list">
                {books.map((book) => (
                    <div className="book-card" key={book.id}>
                        <input
                            type="checkbox"
                            checked={selectedBookId === book.id}
                            onChange={() => handleCheck(book.id)}
                            style={{ marginRight: '10px' }}
                        />
                        <div>
                            <h3>{book.title}</h3>
                            <p>{book.content}</p>
                        </div>
                    </div>
                ))}
            </div>

                <div className="button-group">
                    <Button variant="contained" onClick={() => navigate('/create')}>도서 등록</Button>
                    <Button variant="contained" onClick={handleView}>도서 조회</Button>
                    <Button variant="contained">표지 등록</Button>
                    <Button variant="contained" color="error" onClick={handleDelete}>도서 삭제</Button>
                </div>

            </div>
        </ThemeProvider>
    );
}

export default BookList;
