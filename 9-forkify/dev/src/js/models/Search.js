import axios from 'axios';
import { key, proxy } from '../config';

export default class Search {
    constructor(query) {
        this.query = query;
    }
    
    async getResults() {
        // const proxy = 'https://cors-anywhere.herokuapp.com';
        const proxy = '';
        const key = 
        try {
            const res = await axios(`${proxy}http://forkify-api.com/api/search?&q=${this.query}`);
            this.result = res.data.recipes;
            console.log(this.result);
        } catch (error) {
            alert(error);
        }
    }
}