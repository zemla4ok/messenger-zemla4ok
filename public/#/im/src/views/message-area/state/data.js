import { observable, action } from "mobx";
import axios from 'axios';

class DataStore {
    messages = observable([]);
    values = observable.map({
        isLoaded: false,
    });

    constructor(userId, chatId) {
        this.userId = userId;
        this.chatId = chatId;

        this.onFetchChatsComplete = ::this.onFetchChatsCompleteHandler;
    }

    onFetchChatsCompleteHandler(result){
        this.setMessages(result.data);
        this.setIsLoaded(true);
    }

    fetchMessages(){
        axios.get(`http://localhost:3000/api/v1/users/${this.userId}/chats/${this.chatId}/messages`)
            .then(this.onFetchChatsComplete);
    }

    get isLoaded() {
        return this.values.get('isLoaded');
    }

    setMessages(value){
        this.messages = value;
    }

    setIsLoaded(value) {
        this.values.set('isLoaded', value);
    }
}
export default DataStore;