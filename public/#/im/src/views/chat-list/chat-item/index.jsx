import React from 'react';
import { observer, toJS } from 'mobx-react';


class ChatItem extends React.Component {
    constructor(props) {
        super(props);


    }

    onClickHandler(){

    }

    render() {
        const { chat } = this.props;

        return (
            <div style={{borderColor:'violet', borderStyle: 'dashed', margin: '5px', height: '30px', textAlign: 'center'}}>
                <b>{chat.name}</b>
            </div>
        );
    }
}

export default ChatItem;

