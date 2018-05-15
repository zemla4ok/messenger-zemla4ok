import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from "mobx";


class MessageList extends React.Component{
    constructor(props){
        super(props);

    }

    render(){

        return (
            <div style={{width:'99%', height:'80%', borderColor:'green', borderStyle: 'solid'}} >

            </div>
        )
    }
}

export default observer(MessageList);