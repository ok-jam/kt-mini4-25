// BookCreate.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  TextField,
  Button,
  Grid,
  IconButton,
  ThemeProvider,
  CssBaseline,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import theme from './theme.ts';


function BookCreate() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (!title.trim() || !content.trim()) {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }

    try {
      await axios.post('http://localhost:8080/api/books', { title, content });
      alert('도서가 등록되었습니다.');
      navigate('/');
    } catch (error) {
      console.error('도서 등록 실패:', error);
      alert('도서 등록 실패');
    }
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

      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#f9f9f9',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          p: 3,
        }}
      >
        <Box
          sx={{
            p: 0,
            width: '100%',
            maxWidth: 'none',
            borderRadius: '40px',
            backgroundColor: 'transparent',
            boxShadow: 0,
            borderRadius:0,
          }}
        >
          <Typography variant="h5" align="center" sx={{ fontWeight: 'bold', mb: 4, textDecoration: 'underline' }}>
            도서 등록
          </Typography>

          <Grid container spacing={3} direction="column">
            <Grid item>
              <Typography sx={{ fontWeight: 'bold', mb: 1 }}>[제목]</Typography>
              <TextField
                placeholder="제목을 입력해주세요"
                fullWidth
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Grid>

            <Grid item>
              <Typography sx={{ fontWeight: 'bold', mb: 1 }}>[내용]</Typography>
              <TextField
                placeholder="내용을 입력해주세요"
                multiline
                minRows={6}
                fullWidth
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Grid>

            <Grid item sx={{ textAlign: 'right' }}>
              <Button
                variant="contained"
                onClick={handleRegister}
                sx={{
                backgroundColor: '#F7DADB',
                color: '#000',
                '&:hover': {
                  backgroundColor: '#e6caca',
                  },
                px: 4,
                py: 1,
                borderRadius: 2,
                fontWeight: 'bold',
                }}
              >
                도서 등록
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default BookCreate; 