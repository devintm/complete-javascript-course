import axios from 'axios';

import { proxy, url } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {
        try {
            const res = await axios(`${proxy}${url}search?&q=${this.query}`);
            this.result = res.data.recipes;
            console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}
