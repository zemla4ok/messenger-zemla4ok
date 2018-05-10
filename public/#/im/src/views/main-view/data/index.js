import { observable, action } from "mobx";

class DataStore {
    @observable name;

    constructor(){
        this.setName(null);
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