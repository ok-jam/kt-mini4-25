// src/theme.ts
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#F7DADB',
          '&:hover': {
            backgroundColor: '#e6caca', // 호버 색상 (선택사항)
          },
        },
      },
    },
  },
});

export default theme;