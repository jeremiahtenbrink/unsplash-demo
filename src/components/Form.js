import React from "react";
import { Form, Input, Button } from "antd";

class FormComponent extends React.Component{
    
    state = {
        username: "", password: "", error: "",
    };
    
    handleOnChange = ( e ) => {
        this.setState( { [ e.target.name ]: e.target.value } );
    };
    
    login = ( e ) => {
        e.preventDefault();
        if( this.state.username === "" || this.state.password === "" ){
            this.setState( { error: "You must enter a username and password" } );
        }else{
            this.setState( { error: "", username: "", password: "" } );
        }
        this.props.login();
        
    };
    
    render(){
        return ( <div>
            <h1>Form</h1>
            <Form onSubmit={ this.login }>
                <Form.Item label={ "User name" }>
                    <Input name={ "username" }
                           value={ this.state.username }
                           onChange={ this.handleOnChange }
                    />
                </Form.Item>
                <Form.Item label={ "Password" }>
                    <Input name={ "password" }
                           value={ this.state.password }
                           onChange={ this.handleOnChange }
                    />
                </Form.Item>
                <div>
                    { this.state.error }
                </div>
                <button>Login</button>
            </Form>
        </div> );
    }
}

export default FormComponent;