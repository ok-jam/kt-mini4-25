// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F7DADB', // 기본 primary 색상
      contrastText: '#000000', // 버튼 글자색 (contrast)
    },
    secondary: {
      main: '#e6caca', // 보조 색상
    },
    text: {
      primary: '#333333', // 기본 텍스트 색상
      secondary: '#666666', // 보조 텍스트 색상
    },
    background: {
      default: '#ffffff', // 기본 배경색
      paper: '#fdfdfd',   // 카드나 종이 배경색
    },
  },
  typography: {
    fontFamily: `'Noto Sans KR', 'Roboto', sans-serif`, // 기본 폰트
    fontSize: 14,
    fontWeightRegular: 400,
    fontWeightBold: 700,
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 700,
    },
    body1: {
      fontSize: '1rem',
    },
    button: {
      textTransform: 'none', // 버튼 대문자 변환 제거
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#F7DADB',
          padding: '10px 20px',
          margin: '8px',
          borderRadius: '8px',
          fontSize: '1rem',
          fontWeight: 'bold',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#e6caca',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          padding: '16px',
          margin: '16px',
          borderRadius: '12px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          backgroundColor: '#fdfdfd',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#333333', // 기본 텍스트 색상
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: '24px',
        },
      },
    },
  },
});

export default theme;
