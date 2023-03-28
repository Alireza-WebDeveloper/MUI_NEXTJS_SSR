import { CssBaseline, ThemeProvider } from '@mui/material';
import { themeStyle } from '../theme';
import { IconContext } from 'react-icons';
const MUIThemeProvider = ({ children }) => {
  return (
    <IconContext.Provider value={{ size: '38px' }}>
      <ThemeProvider theme={themeStyle}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </IconContext.Provider>
  );
};

export default MUIThemeProvider;
