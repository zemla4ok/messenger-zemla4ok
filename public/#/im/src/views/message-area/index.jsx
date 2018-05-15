import React from 'react';
import { observer } from 'mobx-react';
import { observable, action } from "mobx";

import DataStore from './state/data.js';

class MessageArea extends React.Component{
    constructor(props){
        super(props);

        Object.assign(this, {
            data: new DataStore()
        });

        this.data.setIsLoaded(false);
    }
    render(){
        const { isLoaded } = this.data;

        return (
            <div style={{float:'left', width:'67%', height:'92%', borderColor:'deeppink', borderStyle: 'solid'}} >
                {
                    !isLoaded ?
                        <div  style={{marginTop: '45%', marginLeft: '45%'}}>Loading......</div> :
                        <div>
                            qwe
                        </div>
                }
            </div>
        )
    }
}

export default observer(MessageArea);