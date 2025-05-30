// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#F7DADB',
          padding: '10px 20px',          // 내부 간격 (상하 10px, 좌우 20px)
          margin: '8px',                 // 버튼 간 간격
          borderRadius: '8px',           // 버튼 모서리 둥글게
          fontWeight: 'bold',            // 글자 두께
          fontSize: '1rem',              // 글자 크기
          textTransform: 'none',         // 글자 대문자 변환 제거
          '&:hover': {
            backgroundColor: '#e6caca',  // 호버 시 색상
          },
        },
      },
    },
  },
});

export default theme;
