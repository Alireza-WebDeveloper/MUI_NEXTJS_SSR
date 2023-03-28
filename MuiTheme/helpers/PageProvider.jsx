import { CacheProvider, EmotionCache } from '@emotion/react';
import Head from 'next/head';
import createEmotionCache from '../theme/createEmotionCache';
import MUIThemeProvider from './MUIThemeProvider';

const clientSideEmotionCache = createEmotionCache();
const PageProvider = ({ children, emotionCache = clientSideEmotionCache }) => (
  <CacheProvider value={emotionCache}>
    <Head>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
    </Head>
    <MUIThemeProvider>{children}</MUIThemeProvider>
  </CacheProvider>
);

export default PageProvider;
