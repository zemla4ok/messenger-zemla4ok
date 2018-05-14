import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from "mobx";

import Header from './../header/index.jsx';
import ChatList from './../chat-list/index.jsx';
import MessageArea from '../message-area/index.jsx';
import DataStore from './data/index.js';

@observer
class View extends React.Component {
    constructor(props) {
        super(props);

        Object.assign(this, {
            data: new DataStore()
        })
    }

    render() {
        const { name, userId } =  this.data;
        const values = {
            userName: name
        };

        return <div style={{marginLeft:'15%', height:'99%', width:'70%', borderColor:'red', borderStyle: 'solid'}} >
            <Header values={values}/>
            <ChatList userId={userId}/>
            <MessageArea/>
            </div>
    }
}

export default View;