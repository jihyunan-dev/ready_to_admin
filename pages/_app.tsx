import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/common/createEmotionCache';
import { globalTheme } from '../src/common/globalTheme';
import GlobalProvider from '../src/stores/StoreContext';
import { observer } from 'mobx-react';

const clientSideEmotionCache = createEmotionCache();

export type MyAppProps = AppProps & {
    emotionCache?: EmotionCache;
};

const MyApp = observer((props: MyAppProps) => {
    const [mode, setMode] = useState<PaletteMode>('light');
    const {
        Component,
        pageProps,
        emotionCache = clientSideEmotionCache,
    } = props;

    return (
        <GlobalProvider>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={globalTheme(mode)}>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
        </GlobalProvider>
    );
});

export default MyApp;
