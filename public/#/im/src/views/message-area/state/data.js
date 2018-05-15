import { observable, action } from "mobx";
import axios from 'axios';

class DataStore {
    values = observable.map({
        isLoaded: false,
    });

    constructor() {

    }


    get isLoaded() {
        return this.values.get('isLoaded');
    }

    setIsLoaded(value) {
        this.values.set('isLoaded', value);
    }
}
export default DataStore;