import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { observer } from 'mobx-react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/common/createEmotionCache';
import { globalTheme } from '../src/common/globalTheme';
import GlobalProvider from '../src/stores/StoreContext';
import Header from '../src/components/Header';

const clientSideEmotionCache = createEmotionCache();

export type MyAppProps = AppProps & {
    emotionCache?: EmotionCache;
};

const queryClient = new QueryClient();

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
                    <QueryClientProvider client={queryClient}>
                        <ReactQueryDevtools initialIsOpen={true} />
                        <Header />
                        <Component {...pageProps} />
                    </QueryClientProvider>
                </ThemeProvider>
            </CacheProvider>
        </GlobalProvider>
    );
});

export default MyApp;
