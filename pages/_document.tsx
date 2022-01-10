import React from 'react';
import Document, { Html, Head, Main, NextScript } from 'next/document';
import createEmotionCache from '../src/common/createEmotionCache';
import createEmotionServer from '@emotion/server/create-instance';

export default class MyDocument extends Document {
    render() {
        return (
            <Html lang='en'>
                <Head>
                    <style jsx global>
                        {`
                            @font-face {
                                font-family: 'Pretendard-Regular';
                                src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff')
                                    format('woff');
                                font-weight: 400;
                                font-style: normal;
                            }

                            @font-face {
                                font-family: 'Pretendard-Medium';
                                src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff')
                                    format('woff');
                                font-weight: 500;
                                font-style: normal;
                            }

                            @font-face {
                                font-family: 'Pretendard-Bold';
                                src: url('https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff')
                                    format('woff');
                                font-weight: 700;
                                font-style: normal;
                            }
                        `}
                    </style>
                </Head>
                <Main />
                <NextScript />
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {
    const originalRenderPage = ctx.renderPage;
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
        originalRenderPage({
            // eslint-disable-next-line react/display-name
            enhanceApp: (App: any) => (props) =>
                <App emotionCache={cache} {...props} />,
        });

    const initialProps = await Document.getInitialProps(ctx);

    const emotionStyles = extractCriticalToChunks(initialProps.html); // html을 인자로 받아서 html과 styles를 key로 가지는 object 반환
    const emotionStyleTags = emotionStyles.styles.map((style) => (
        <style
            data-emotion={`${style.key} ${style.ids.join(' ')}`}
            key={style.key}
            dangerouslySetInnerHTML={{ __html: style.css }}
        />
    ));

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...React.Children.toArray(initialProps.styles),
            ...emotionStyleTags,
        ],
    };
};
