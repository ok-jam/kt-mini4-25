// BookUpdate.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TextField, Button } from '@mui/material';
import './BookList.css';

function BookUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    content: ''
  });

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/books/${id}`)
      .then((res) => {
        const { title, content } = res.data;
        setFormData({ title, content });
      })
      .catch((err) => console.error('도서 조회 실패:', err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    axios
      .put(`http://localhost:8080/api/books/${id}`, formData)
      .then(() => navigate(`/detail/${id}`))
      .catch((err) => console.error('수정 실패:', err));
  };

  return (
    <div className="main-container">
      <h1 className="title">정보 수정</h1>

      <TextField
        label="제목"
        name="title"
        fullWidth
        value={formData.title}
        onChange={handleChange}
        sx={{ mb: 2 }}
      />
      <TextField
        label="내용"
        name="content"
        fullWidth
        multiline
        rows={6}
        value={formData.content}
        onChange={handleChange}
        sx={{ mb: 3 }}
      />

      <div className="button-group">
        <button onClick={handleSubmit}>정보 저장</button>
        <button className="danger" onClick={() => navigate(-1)}>취소</button>
      </div>
    </div>
  );
}

export default BookUpdate;

