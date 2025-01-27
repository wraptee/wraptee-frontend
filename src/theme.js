// theme.js
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    optional: {
      main: "#ff6347"
    }

  },
  components: {
    MuiListItem: {
      styleOverrides: {
        root: {
          listStyleType: 'none !important',
        },
      },
    },
  },

  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});

export default theme;
