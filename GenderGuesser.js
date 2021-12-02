import axios from "axios";

export class GenderGuesser {
    getGuess(name) {
        return axios.get('https://api.genderize.io/?name=' + name);
    }
}