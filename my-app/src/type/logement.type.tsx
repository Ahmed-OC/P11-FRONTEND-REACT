export type logement = {
    id: string;
    title: string;
    cover: string;
    pictures: string[];
    description: string;
    host: {
        name: string;
        picture: string;
    };
    rating: string;
    location: string;
    equipments: string[];
    tags: string[];
};
export type logementHomeFormatted = {
    id: string
    title: string;
    cover: string;
};