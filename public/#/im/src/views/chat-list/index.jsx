import React from 'react';
import { observer, toJS } from 'mobx-react';

import DataStore from './state/data.js';
import ChatItem from './chat-item/index.jsx';

class ChatList extends React.Component {
    constructor(props) {
        super(props);

        Object.assign(this, {
            data: new DataStore(props.userId)
        });

        this.onClick = ::this.onClickHandler;

        this.data.fetchChats();
    }

    onClickHandler(){
        const newChatName = document.getElementById('new-chat-name').value;
        this.data.addChat(newChatName);
        document.getElementById('new-chat-name').value = '';
    }

    render() {
        const { isLoaded, chats } = this.data;

        return   (
        <div style={{float:'left', height:'92%', width:'30%', borderColor:'blue', borderStyle: 'solid'}} >
            <input id="new-chat-name" type="text" placeholder="new chat name" style={{width: '80%', height: '30px'}}/>
            <input type='button' value='create' onClick={this.onClick} style={{width: '20%', height: '30px'}}/>
            {
                !isLoaded ?
                    <div style={{marginTop: '40%', marginLeft: '40%'}}>Loading......</div> :
                    <div style={{height: '95%', overflowY: 'auto'}}>
                        {chats.map(chat => <ChatItem key={chat.id} chat={chat}/>)}
                    </div>
            }
        </div>
        )
    }
}

export default observer(ChatList);

