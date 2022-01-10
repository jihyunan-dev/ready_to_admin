import type { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/common/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

export type MyAppProps = AppProps & {
    emotionCache?: EmotionCache;
};

const MyApp = (props: MyAppProps) => {
    const {
        Component,
        pageProps,
        emotionCache = clientSideEmotionCache,
    } = props;
    return (
        <CacheProvider value={emotionCache}>
            <CssBaseline />
            <Component {...pageProps} />
        </CacheProvider>
    );
};

export default MyApp;
