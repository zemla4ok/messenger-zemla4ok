import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from "mobx";


class ChatFooter extends React.Component{
    constructor(props){
        super(props);

    }

    render(){

        return (
            <div style={{width:'99%', height:'7%', borderColor:'yellow', borderStyle: 'solid'}} >
                <div>
                    <input type="text" placeholder="MESSAGE" style={{height: '100%', width: '80%', float: 'left'}}/>
                    <input type="button" value="SEND MESSAGE" style={{height: '100%', width: '20%'}}/>
                </div>
            </div>
        )
    }
}

export default observer(ChatFooter);