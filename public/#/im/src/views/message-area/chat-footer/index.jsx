import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from "mobx";
import { Button } from 'react-bootstrap';

class ChatFooter extends React.Component{
    constructor(props){
        super(props);

    }

    render(){

        return (
            <div style={{width:'100%', height:'7%', borderColor:'yellow', borderStyle: 'solid'}} >
                <div>
                    <input type="text" placeholder="MESSAGE" style={{height: '100%', width: '78%', float: 'left'}}/>
                    <Button bsStyle="primary" style={{height: '100%', width: '22%'}}>SEND MESSAGE</Button>
                </div>
            </div>
        )
    }
}

export default observer(ChatFooter);