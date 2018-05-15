import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from "mobx";


class MessageAreaHeader extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        const { chatName } = this.props;

        return (
            <div style={{width:'99%', height:'10%', borderColor:'yellow', borderStyle: 'solid'}} >
                <div  style={{width: '99%', borderColor:'blue', borderStyle: 'dashed'}}>{chatName}</div>
                <div>
                    <input type="text" placeholder="user login" style={{height: '30px', width: '200px', float: 'left'}}/>
                    <input type="button" value="add to chat" style={{height: '30px', marginLeft: '5px'}}/>
                    <input type="button" value="get info" style={{height: '30px', marginLeft: '5px'}}/>
                </div>
            </div>
        )
    }
}

export default observer(MessageAreaHeader);