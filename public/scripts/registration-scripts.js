function getDataFromForm(context){
    return {
        name: context.nameField.state.value,
        surname: context.surnameField.state.value,
        login: context.login.state.value,
        email: context.email.state.value,
        passwort: context.pass.state.value        
    }
}