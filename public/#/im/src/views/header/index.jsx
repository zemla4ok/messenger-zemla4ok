import React from 'react';
import { observer } from 'mobx-react';
import { Button } from 'react-bootstrap';
import Modal from 'react-bootstrap-modal';
import { Label } from 'react-bootstrap';

import DataState from './state/data.js';
import FormUpdate from '../form-update/index.jsx';

class Header extends React.Component{
    constructor(props){
        super(props);

        Object.assign(this, {
            data: new DataState()
        });

        this.onHide = ::this.onHideHandler;
        this.onClick = ::this.onClickHandler;
    }

    onClickHandler(){
        this.data.setIsHide(true);
    }

    onHideHandler(){
        this.data.setIsHide(false);
    }

    render(){
        const name = this.props.values.userName;
        const { isHide } = this.data;

        return (
            <div style={{height:'7%', borderColor:'green', borderStyle: 'solid'}} >
                <div style={{marginTop: '1%', marginLeft: '2%', float: 'left'}}>
                    <b>
                        MESSENGER
                    </b>
                </div>
                <div style={{float: 'right', width: '30%'}}><Button onClick={this.onClick} style={{width: '100%'}} bsStyle="info">{name}</Button></div>
                <div>
                <Modal
                    show={isHide}
                    onHide={this.onHide}>
                    <Modal.Header>
                        <Modal.Title id='ModalHeader'>{name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <FormUpdate userName={name}/>
                    </Modal.Body>
                </Modal>
                </div>
            </div>
        )
    }
} 

export default observer(Header);