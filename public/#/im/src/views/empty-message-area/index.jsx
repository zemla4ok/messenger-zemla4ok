import React from 'react';

class EmptyMessageArea extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return <div style={{float:'left', width:'67%', height:'92%', borderColor:'deeppink', borderStyle: 'solid'}} >
            <div style={{marginTop: '45%', marginLeft: '45%'}}><b>Choose the chat</b></div>
        </div>
    }
}

export default EmptyMessageArea;