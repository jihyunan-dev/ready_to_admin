import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = observer(() => {
    return (
        <>
            <Head>
                <title>ADMIN TEST</title>
            </Head>
        </>
    );
});

export default Home;
