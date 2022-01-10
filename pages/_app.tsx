import React, { useState } from 'react';
import type { AppProps } from 'next/app';
import { CssBaseline, PaletteMode, ThemeProvider } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import createEmotionCache from '../src/common/createEmotionCache';
import { globalTheme } from '../src/common/globalTheme';
import GlobalProvider, { useCounter } from '../src/stores/StoreContext';
import { observer } from 'mobx-react';

const clientSideEmotionCache = createEmotionCache();

export type MyAppProps = AppProps & {
    emotionCache?: EmotionCache;
};

const MyApp = observer((props: MyAppProps) => {
    const [mode, setMode] = useState<PaletteMode>('dark');
    const {
        Component,
        pageProps,
        emotionCache = clientSideEmotionCache,
    } = props;

    const counterStore = useCounter();

    return (
        <GlobalProvider>
            <CacheProvider value={emotionCache}>
                <ThemeProvider theme={globalTheme(mode)}>
                    <button
                        type='button'
                        onClick={() =>
                            setMode((pre) =>
                                pre === 'light' ? 'dark' : 'light'
                            )
                        }
                    >
                        토글
                    </button>
                    <span>{counterStore.number}</span>
                    <button onClick={counterStore.increaseNumber}>
                        increase
                    </button>
                    <button onClick={counterStore.decreaseNumber}>
                        decrease
                    </button>
                    <CssBaseline />
                    <Component {...pageProps} />
                </ThemeProvider>
            </CacheProvider>
        </GlobalProvider>
    );
});

export default MyApp;
