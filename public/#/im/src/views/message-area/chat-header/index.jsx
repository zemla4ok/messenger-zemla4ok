import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from "mobx";
import { Button } from 'react-bootstrap';

class MessageAreaHeader extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        const { chatName } = this.props;

        return (
            <div style={{width:'100%', height:'12%', borderColor:'yellow', borderStyle: 'solid'}} >
                <div  style={{width: '100%', borderColor:'blue', borderStyle: 'dashed'}}>{chatName}</div>
                <div>
                    <input type="text" placeholder="user login" style={{height: '30px', width: '40%', float: 'left', marginTop: '5px'}}/>
                    <Button bsStyle="info" style={{height: '30px', marginLeft: '5px', marginTop: '5px'}}>add to chat</Button>
                    <Button bsStyle="info" style={{height: '30px', marginLeft: '5px', marginTop: '5px'}}>get info</Button>
                </div>
            </div>
        )
    }
}

export default observer(MessageAreaHeader);