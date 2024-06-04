import { createTheme } from '@mui/material/styles';
import Colors from '../components/atoms/Colors';

const theme = createTheme({
  palette: {
    background: {
      default: Colors.secondary.soft,
    },
  },
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
    allVariants: {
      color: Colors.primary.soft,
    },
    h1: {
      fontSize: '64px',
      fontWeight: 'bold',
      lineHeight: 1.4,
    },
    h2: {
      fontSize: '48px',
      fontWeight: 'bold',
      lineHeight: 1.4,
    },
    h3: {
      fontSize: '40px',
      fontWeight: 'bold',
      lineHeight: 1.4,
    },
    h4: {
      fontSize: '32px',
      fontWeight: 'bold',
      lineHeight: 1.4,
    },
    h5: {
      fontSize: '28px',
      lineHeight: 1.4,
    },
    h6: {
      fontSize: '20px',
      lineHeight: 1.4,
    },
    body1: {
      fontSize: '1rem',
      color: 'black',
      lineHeight: 1.4,
    },
  },
});

export default theme;
