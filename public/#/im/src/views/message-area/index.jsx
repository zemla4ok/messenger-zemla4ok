import React from 'react';

class MessageArea extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div style={{float:'left', width:'67%', height:'92%', borderColor:'deeppink', borderStyle: 'solid'}} >
            MessageBlock
            </div>
    }
}

export default MessageArea;