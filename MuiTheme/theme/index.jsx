import { createTheme } from '@mui/material/styles';
import { colors } from '@mui/material';
const mode = true;
export const themeStyle = createTheme({
  direction: 'rtl',
  palette: {
    mode: mode ? 'dark' : 'light',
    default: {
      main: mode ? colors.grey[900] : colors.grey[200],
    },
    footer: {
      main: mode ? colors.grey[900] : colors.grey[200],
    },
    primary: { main: mode ? colors.deepPurple[400] : colors.deepPurple[800] },
    secondary: { main: mode ? colors.red[300] : colors.red[800] },
    warning: { main: mode ? colors.orange[300] : colors.orange[800] },
    info: { main: mode ? colors.amber[400] : colors.amber[700] },
  },
  typography: {
    fontFamily: 'Yekan',
  },
});
