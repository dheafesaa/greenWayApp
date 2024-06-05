import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import Colors from '../components/atoms/Colors';

const baseTheme = createTheme({
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
      marginBottom: '16px',
    },
    h2: {
      fontSize: '48px',
      fontWeight: 'bold',
      lineHeight: 1.4,
      marginBottom: '16px',
    },
    h3: {
      fontSize: '40px',
      fontWeight: 'bold',
      lineHeight: 1.4,
      marginBottom: '16px',
    },
    h4: {
      fontSize: '32px',
      fontWeight: 'bold',
      lineHeight: 1.4,
      marginBottom: '16px',
    },
    h5: {
      fontSize: '28px',
      lineHeight: 1.4,
      marginBottom: '16px',
    },
    h6: {
      fontSize: '20px',
      lineHeight: 1.4,
      marginBottom: '16px',
    },
    body1: {
      fontSize: '1rem',
      color: 'black',
      lineHeight: 1.4,
    },
  },
});

const theme = responsiveFontSizes(baseTheme);

export default theme;
