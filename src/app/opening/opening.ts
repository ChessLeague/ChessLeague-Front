import { OpeningType } from "./openingType.enum";

export class Opening {
    id: number;
    name: string;
    classification: OpeningType;

    constructor(id: number, name: string, classification: OpeningType) {
        this.id = id;
        this.name = name;
        this.classification = classification;
    }
}
