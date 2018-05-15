import { observable, action } from "mobx";
import axios from 'axios';

class DataStore {
    name;
    userId;
    values = observable.map({
        isChoosed: false,
        chat: {}
    });

    constructor(){
        this.setName(null);

        this.getName();
    }

    getName(){
        let result = null;
        let id = null;
        let tmp = [];
        location.search.substr(1)
            .split('&')
                .forEach(item => {
                    tmp = item.split('=');
                    if(tmp[0] === 'login')
                        result = decodeURIComponent(tmp[1]);
                    if(tmp[0] === 'id')
                        id = decodeURIComponent(tmp[1]);
                });
        this.setName(result);
        this.setUserId(id);
    }

    get isChoosed() {
        return this.values.get('isChoosed');
    }

    get chat() {
        return this.values.get('chat');
    }

    setChat(value){
        this.values.set('chat', value);
    }

    setIsChoosed(value){
        this.values.set('isChoosed', value);
    }

    setName(val){
        this.name = val;
    }

    setUserId(val){
        this.userId = val;
    }
}

export default DataStore;