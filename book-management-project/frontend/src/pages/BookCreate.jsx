// BookCreate.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Box, Typography, TextField, Button, Paper } from '@mui/material';

function BookCreate() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
        await axios.post('http://localhost:8080/api/books', {
            title,
            content
        });
        alert('도서가 등록되었습니다.')
        navigate('/');
    } catch (error) {
        console.error('도서 등록 실패:', error);
        alert('도서 등록 실패');
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', mt: 5 }}>
      <Paper sx={{ p: 3 }}>
        <Typography variant="h5" component="h1" align="center" gutterBottom>
          📚 도서 등록
        </Typography>
        <Box component="form" noValidate autoComplete="off">
          <TextField
            label="제목"
            variant="outlined"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="내용"
            variant="outlined"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
            onClick={handleRegister}
          >
            도서 등록
          </Button>
        </Box>
      </Paper>
    </Box>
  );
}

export default BookCreate;