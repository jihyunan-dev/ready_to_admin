class Profile {
    id: number | null = null;
    userId: string = '';
    username: string = '';
    email: string = '';

    static createFormApi(data: any) {
        const profile = new Profile();
        profile.id = data.id;
        profile.userId = data.userId;
        profile.username = data.username;
        profile.email = data.email;

        return profile;
    }
}

export default Profile;

export const defaultProfile = new Profile();
