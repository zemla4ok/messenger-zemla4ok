import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from "mobx";

import DataStore from './state/data.js';
import Header from './chat-header/index.jsx';
import MessageList from './message-list/index.jsx';
import ChatFooter from './chat-footer/index.jsx';

class MessageArea extends React.Component{
    constructor(props){
        super(props);

        Object.assign(this, {
            data: new DataStore(props.userId, props.chat.id)
        });

        this.data.setIsLoaded(false);
        this.data.fetchMessages();
    }
    render(){
        const { isLoaded } = this.data;
        const { name } = this.props.chat;

        return (
            <div style={{float:'left', width:'67%', height:'92%', borderColor:'deeppink', borderStyle: 'solid'}} >
                {
                    !isLoaded ?
                        <div  style={{marginTop: '45%', marginLeft: '45%'}}>Loading......</div> :
                        <div>
                            <Header chatName={name}/>
                            <MessageList/>
                            <ChatFooter/>
                        </div>
                }
            </div>
        )
    }
}

export default observer(MessageArea);