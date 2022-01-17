import React from 'react';
import Head from 'next/head';
import { observer } from 'mobx-react';
import { useQuery } from 'react-query';
import ownerQueries from '../src/service/owner/query';

const ReactQueryPage = observer(() => {
    const { data: profile } = useQuery(ownerQueries.getProfile);
    const { data: links } = useQuery(ownerQueries.getLinks);

    return (
        <>
            <Head>
                <title>ADMIN TEST</title>
            </Head>
            <div>
                <h3>{profile?.username}</h3>
                <h4>{profile?.userId}</h4>
                <p>{profile?.email}</p>
            </div>
            <div>
                <ul>
                    {links?.map((link: any) => (
                        <li key={link.id}>{link.title}</li>
                    ))}
                </ul>
            </div>
        </>
    );
});

export default ReactQueryPage;
