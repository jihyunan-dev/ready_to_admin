class Link {
    id: string | null = null;
    owner: number | null = null;
    title: string = '';
    subtitle: string = '';
    url: string = '';

    static createFormApi(data: any) {
        const link = new Link();
        link.id = data.id;
        link.owner = data.owner;
        link.title = data.title;
        link.subtitle = data.subtitle;
        link.url = data.url;

        return link;
    }
}

export default Link;

export const defaultLink = new Link();
