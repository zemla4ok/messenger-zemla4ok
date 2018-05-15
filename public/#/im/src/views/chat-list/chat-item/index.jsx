import React from 'react';
import { observer, toJS } from 'mobx-react';


class ChatItem extends React.Component {
    constructor(props) {
        super(props);

        this.onClick = ::this.onClickHandler;
    }

    onClickHandler(){
        this.props.onClick(this.props.chat);
    }

    render() {
        const { chat } = this.props;

        return (
            <div onClick={this.onClick} style={{borderColor:'violet', borderStyle: 'dashed', margin: '5px', height: '30px', textAlign: 'center'}}>
                <b>{chat.name}</b>
            </div>
        );
    }
}

export default ChatItem;

