import { createTheme, makeStyles } from "@mui/material";

export const defaultTheme = createTheme({
    palette: {
      primary: {
        main: '#3F51B5', // Azul Vibrante
      },
      secondary: {
        main: '#FFEB3B', // Amarelo Elétrico
      },
      success: {
        main: '#4CAF50', // Verde Natureza
      },
      error: {
        main: '#FF5722', // Vermelho Aventureiro
      },
      text: {
        primary: '#212121', // Preto Texto
        secondary: '#757575', // Cinza Texto
      },
      background: {
        default: '#FFFFFF', // Branco Neve
      },
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
    },
  });

export const cards = makeStyles((theme) => ({
    appBar: {
      backgroundColor: '#8B0000', // Scarlet
    },
    teamCard: {
      backgroundColor: '#F8F8FF', // Ghost White
      marginBottom: theme.spacing(2),
    },
    addPokemonCard: {
      backgroundColor: '#8A2BE2', // Violet
      color: '#FFFFFF', // White
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#6A5ACD', // Slate Blue
      },
    },
  }));