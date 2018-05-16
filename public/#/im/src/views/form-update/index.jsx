import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Button } from 'react-bootstrap';

import TextField from './text-field/index.jsx';
import PasswordField from './password-field/index.jsx';
import RepeatingPasswordField from './repeating-password-field/index.jsx';

export default class FormView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: props.value, name: props.userName};

        this.validate = this.validate.bind(this);
        this.getForm = this.getForm.bind(this);
    }
    getForm(){
        return {
            name: this.refs.nameField.state.value,
            surname: this.refs.surnameField.state.value,
            password: this.refs.pass.state.value
        }
    }



    validate(){
        if(this.refs.nameField.state.valid && this.refs.surnameField.state.valid &&
            this.refs.pass.state.valid && this.refs.pass2.state.valid)
            return false;
        else
            return true;
    }

    render() {
        return (
            <form>
                <TextField ref="nameField" holder="Name" />
                <TextField ref="surnameField" holder="Surname"/>
                <Button bsStyle="info">Update info</Button>
                <PasswordField ref="pass"/>
                <RepeatingPasswordField ref="pass2"/>
                <Button bsStyle="info">Update password</Button>
            </form>
        );
    }
}