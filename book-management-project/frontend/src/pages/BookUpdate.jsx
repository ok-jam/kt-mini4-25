import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import {
  Container,
  TextField,
  Button,
  CssBaseline,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import theme from './theme.ts';
import { ThemeProvider } from '@mui/material/styles';

function BookUpdate() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '',
    content: '',
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
    if (!formData.title.trim() || !formData.content.trim()) {
      alert('제목과 내용을 입력해주세요.');
      return;
    }

    axios
      .patch(`http://localhost:8080/api/books/${id}`, formData)
      .then(() => {
        alert('수정 완료!');
        navigate(`/detail/${id}`);
      })
      .catch((err) => {
        console.error('수정 실패:', err);
        alert('수정 실패');
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar position="static" sx={{ backgroundColor: '#F7DADB', boxShadow: 0 }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => navigate('/')}>
            <HomeIcon />
          </IconButton>
          <Typography variant="h6" sx={{ color: '#333' }}>
            작가의 산책
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ mt: 5 }}>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          정보 수정
        </Typography>

        <Box component="form" noValidate autoComplete="off" sx={{ mt: 3 }}>
          <TextField
            label="제목"
            name="title"
            value={formData.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="내용"
            name="content"
            value={formData.content}
            onChange={handleChange}
            fullWidth
            multiline
            rows={5}
            margin="normal"
          />

          <Box mt={3} display="flex" justifyContent="space-between">
            <Button variant="outlined" onClick={handleSubmit} sx={{ color: 'black' }}>
              정보 저장
            </Button>
            <Button variant="outlined" color="error" onClick={() => navigate(-1)}>
              취소
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default BookUpdate;
