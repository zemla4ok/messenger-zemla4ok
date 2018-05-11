import { observable, action } from "mobx";
import axios from 'axios';

class DataStore {
    @observable name;
    @observable chats;

    constructor(){
        this.setName(null);
    }

    fetchChats(){

    }

    getName(){
        let result = null;
        let tmp = [];
        location.search.substr(1)
            .split('&')
                .forEach(item => {
                    tmp = item.split('=');
                    if(tmp[0] === 'login')
                        result = decodeURIComponent(tmp[1]);
                })
        this.setName(result);
    }

    @action
    setName(val){
        this.name = val;
    }
}

export default DataStore;