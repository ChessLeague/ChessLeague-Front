import { Administrator } from "../administrator/administrator";

export class Comment {
    id: number;
    comment: string;
    date: any;
    author: Administrator

    constructor(id: number, comment: string, date: any, author: Administrator) {
        this.id = id;
        this.comment = comment;
        this.date = date;
        this.author = author;
    }
}
