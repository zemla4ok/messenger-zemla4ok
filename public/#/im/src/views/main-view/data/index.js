import { observable, action } from "mobx";
import axios from 'axios';

class DataStore {
    @observable name;
    @observable userId;

    constructor(){
        this.setName(null);

        this.handleResponse = ::this.handleResponse;

        this.getName();
    }


    handleResponse(res){
        this.setUser(res.data);
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

    @action
    setName(val){
        this.name = val;
    }

    @action
    setUserId(val){
        this.userId = val;
    }
}

export default DataStore;