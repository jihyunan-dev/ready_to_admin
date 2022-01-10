import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/common/createEmotionCache';
import { globalTheme } from '../src/common/globalTheme';

const clientSideEmotionCache = createEmotionCache();

export type MyAppProps = AppProps & {
    emotionCache?: EmotionCache;
};

const MyApp = (props: MyAppProps) => {
    const [mode, setMode] = useState<PaletteMode>('light');
    const {
        Component,
        pageProps,
        emotionCache = clientSideEmotionCache,
    } = props;
    return (
        <CacheProvider value={emotionCache}>
            <ThemeProvider theme={globalTheme(mode)}>
                <button
                    type='button'
                    onClick={() =>
                        setMode((pre) => (pre === 'light' ? 'dark' : 'light'))
                    }
                >
                    토글
                </button>
                <CssBaseline />
                <Component {...pageProps} />
            </ThemeProvider>
        </CacheProvider>
    );
};

export default MyApp;
