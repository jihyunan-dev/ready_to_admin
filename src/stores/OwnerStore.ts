import { makeAutoObservable } from 'mobx';
import Link from '../model/Link';
import Profile, { defaultProfile } from '../model/Profile';

class OwnerStore {
    profile: Profile = defaultProfile;
    links: Link[] = [];

    constructor() {
        makeAutoObservable(this);
    }

    setProfile(profile: Profile) {
        this.profile = profile;
    }

    setLinks(links: Link[]) {
        this.links = links;
    }
}

export default new OwnerStore();
