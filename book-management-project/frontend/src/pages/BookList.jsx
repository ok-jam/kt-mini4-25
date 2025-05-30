import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import BookCard from '../Components/BookCard';
import './BookList.css'; // CSS 분리

function BookList() {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        axios.get('http://localhost:8080/api/books')
            .then((res) => {
                console.log("응답데이터:", res.data);
                setBooks(res.data);
            })
            .catch((err) => console.error('백엔드 연결 실패:', err));
    }, []);

    return (
        <div className="main-container">
            <h1 className="title">작가의 산책</h1>

            <div className="card-list">
                {books.map((book, i) => (
                    <div className="placeholder-card" key={i}>
                        {book}
                    </div>
                ))}
            </div>

            <div className="button-group">
                <button onClick={() => navigate('/create')}>도서 등록</button>
                <button>도서 조회</button>
                <button>표지 등록</button>
                <button className="danger">도서 삭제</button>
            </div>
        </div>
    );
}

export default BookList;
