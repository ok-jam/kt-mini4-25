// BookDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './BookList.css'; 
import HomeButton from '../Components/HomeButton';
function BookDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/books/${id}`)
      .then((res) => setBook(res.data))
      .catch((err) => console.error('도서 불러오기 실패:', err));
  }, [id]);

  if (!book) return <div className="main-container">불러오는 중...</div>;

  return (
    <div className="main-container">
      <HomeButton/>
      <h1 className="title">정보 조회</h1>

      <div style={{ marginBottom: '2rem' }}>
        <div style={{ marginBottom: '1rem' }}>
          <strong>제목:</strong>
          <div>{book.title}</div>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>내용:</strong>
          <div>{book.content}</div>
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <strong>등록일:</strong>
          <div>{book.createdAt}</div>
        </div>
        {book.updatedAt && (
          <div style={{ marginBottom: '1rem' }}>
            <strong>수정일:</strong>
            <div>{book.updatedAt}</div>
          </div>
        )}
      </div>

      <div className="button-group">
        <button onClick={() => navigate(`/update/${id}`)}>정보 수정</button>
        <button className="danger" onClick={() => navigate('/')}>취소</button>
      </div>
    </div>
  );
}

export default BookDetail;


