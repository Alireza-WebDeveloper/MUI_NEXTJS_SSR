import PageProvider from '@/MuiTheme/helpers/PageProvider';
import '../styles/globals.css';
export default function App({ Component, pageProps, emotionCache }) {
  return (
    <PageProvider emotionCache={emotionCache}>
      <Component {...pageProps} />
    </PageProvider>
  );
}
