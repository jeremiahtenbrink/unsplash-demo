import React from "react";
import FormComponent from "./components/Form";
import { Layout } from "antd";
import "./App.scss";

class App extends React.Component{
    
    state = {
        isLoggedIn: false
    };
    
    toggleLoggedIn = () => {
        this.setState( { isLoggedIn: true } );
    };
    
    render(){
        return ( <Layout className={ "container" }>
            { !this.state.isLoggedIn &&
            <FormComponent login={ this.toggleLoggedIn }/> }
            <h3>{ this.state.isLoggedIn ? "Logged In" : "Logged Out" }</h3>
        </Layout> );
    }
}

export default App;
