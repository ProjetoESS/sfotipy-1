export class Music {
    id: number;
    name: string;
    author: string;
    image: string;
    link: string;
    duration: number;
    category: number;

    constructor(music: Music) {
        this.id = music.id;
        this.name = music.name;
        this.author = music.author;
        this.image = music.image;
        this.link = music.link;
        this.duration = music.duration;
        this.category = music.category;
    }

    update(music: Music): void {
        if (music.name) {
            this.name = music.name;
        }
        if (music.author) {
            this.author = music.author;
        }
        if (music.image) {
            this.image = music.image;
        }
        if (music.link) {
            this.link = music.link;
        }
        if (music.duration) {
            this.duration = music.duration;
        }
        if (music.category) {
            this.category = music.category;
        }
    }

}
