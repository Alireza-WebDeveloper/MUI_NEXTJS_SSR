import PageProvider from '@/MuiTheme/helpers/PageProvider';
import { AppBar, Button, Stack, Toolbar } from '@mui/material';
import Link from 'next/link';
import '../styles/globals.css';
export default function App({ Component, pageProps, emotionCache }) {
  return (
    <PageProvider emotionCache={emotionCache}>
      <AppBar>
        <Toolbar>
          <Link style={{ textDecoration: 'none' }} href="/">
            <Button
              style={{ fontSize: '1.1rem' }}
              variant="text"
              color="info"
              size="large"
            >
              صفحه اصلی
            </Button>
          </Link>
          <Link style={{ textDecoration: 'none' }} href="/">
            <Button
              style={{ fontSize: '1.1rem' }}
              variant="text"
              color="info"
              size="large"
            >
              درباره ما
            </Button>
          </Link>
          <Link style={{ textDecoration: 'none' }} href="/">
            <Button
              style={{ fontSize: '1.1rem' }}
              variant="text"
              color="info"
              size="large"
            >
              محصولات
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Stack mt={10}>
        <Component {...pageProps} />
      </Stack>
    </PageProvider>
  );
}
