export class Character {
    constructor(data) {
        this.id = data.id;
        this.name = data.attributes.alias;
        this.description = data.attributes.description
    }

}
export default Character;