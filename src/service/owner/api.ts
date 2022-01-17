import ApiService from '../ApiService';

class OwnerService extends ApiService {
    async getProfile(id: number) {
        return this.get(`/users/${id}`);
    }

    async getLinks(id: number) {
        return this.get(`/links`, {
            params: {
                owner: id,
            },
        });
    }
}

export default new OwnerService('');
