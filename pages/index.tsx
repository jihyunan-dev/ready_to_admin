import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import type { NextPage } from 'next';
import Head from 'next/head';
import ownerService from '../src/service/owner/api';
import Profile from '../src/model/Profile';
import { useOwner } from '../src/stores/StoreContext';
import Link from '../src/model/Link';

const Home: NextPage = observer(() => {
    const fakeId = 1;
    const ownerStore = useOwner();

    useEffect(() => {
        const getData = async () => {
            const profileData = await ownerService.getProfile(fakeId);
            ownerStore.setProfile(Profile.createFormApi(profileData));
            const linksData = await ownerService.getLinks(fakeId);
            ownerStore.setLinks(
                linksData.map((link: any) => Link.createFormApi(link))
            );
        };
        getData();
    }, [ownerStore]);

    return (
        <>
            <Head>
                <title>ADMIN TEST</title>
            </Head>
            <div>
                <h3>{ownerStore.profile.username}</h3>
                <h4>{ownerStore.profile.userId}</h4>
                <p>{ownerStore.profile.email}</p>
            </div>
            <div>
                <ul>
                    {ownerStore.links.map((link) => (
                        <li key={link.id}>{link.title}</li>
                    ))}
                </ul>
            </div>
        </>
    );
});

export default Home;
