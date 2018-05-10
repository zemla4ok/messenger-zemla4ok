import React from 'react';

import InfoButton from './../info-button/index.jsx';

class Header extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        const name = this.props.values.userName;

        return <div style={{height:'6%', borderColor:'green', borderStyle: 'solid'}} >
            Header
            <InfoButton value={name}/>
            </div>
    }
} 

export default Header;