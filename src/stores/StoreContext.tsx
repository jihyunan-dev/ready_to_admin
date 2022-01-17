import React, { useContext, createContext } from 'react';
import Link from '../model/Link';
import Profile from '../model/Profile';
import OwnerStore from './OwnerStore';

type Owner = {
    profile: Profile;
    links: Link[];
    setProfile: (profile: Profile) => void;
    setLinks: (links: Link[]) => void;
};

export const OwnerContext = createContext<Owner>(OwnerStore);

const GlobalProvider = ({ children }: { children: any }) => {
    return (
        <OwnerContext.Provider value={OwnerStore}>
            {children}
        </OwnerContext.Provider>
    );
};
export default GlobalProvider;

export const useOwner = () => {
    const ownerContext = useContext(OwnerContext);
    return ownerContext;
};
