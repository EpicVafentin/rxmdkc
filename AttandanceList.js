export class AttandanceList {
    constructor() {
        this.people = [];
    }

    add(name) {
        if (!this.people.includes(name)) {
            this.people.push(name);
            return true;
        }
        return false;
    }

    place(name, index) {
        //TODO: not implemented
    }

    has(name) {
        for (let i = 0; i < this.people.length; i++) {
            if (name === this.people[i]) return i;
        }
        return false;
    }

    getList() {
        return this.people;
    }
}