import ownerApi from './api';

const id = 1;

export const queryKeys = {
    GET_PROFILE: ['me', 'profile'],
    GET_LINKS: ['me', 'links'],
    ADD_LINK: ['me', 'link'],
};

const queries = {
    getProfile: {
        queryKey: queryKeys.GET_PROFILE,
        queryFn: () => ownerApi.getProfile(id),
    },
    getLinks: {
        queryKey: queryKeys.GET_LINKS,
        queryFn: () => ownerApi.getLinks(id),
    },
};

export default queries;
