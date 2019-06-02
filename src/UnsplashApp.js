import React, { Component } from "react";
import unsplashApi from "./unsplash/unsplash";
import Pictures from "./unsplashComponents/Pictures";
import { Button, Row, Form, Input } from "antd";

class UnsplashApp extends Component{
    state = {
        pics: [], page: 1, maxPageNumber: null, totalPerPage: 20, term: ""
    };
    
    componentDidMount(){
        this.getPicturesFromUnsplash();
    }
    
    onChange = ( e ) => {
        this.setState( { [ e.target.name ]: e.target.value } );
        
        if( e.target.value.length > 2 ){
            debugger;
            this.getPicturesFromUnsplash( this.state.page,
                this.state.totalPerPage,
                e.target.value
            );
        }
    };
    
    getPicturesFromUnsplash = ( pageNumber = this.state.page,
        totalPerPage = this.state.totalPerPage, term = this.state.term ) => {
        debugger;
        unsplashApi().get( "/search/photos", {
            params: {
                query: term, per_page: totalPerPage, page: pageNumber
            },
            
        } ).then( res => {
            console.log( res.data.results.length );
            debugger;
            this.setState( {
                pics: res.data.results, maxPageNumber: res.data.totalPages
            } );
        } ).catch( err => {
            console.log( err );
        } );
    };
    
    buttonPress = ( e ) => {
        if( e.target.name === "prev" ){
            this.getPicturesFromUnsplash( this.state.page - 1 );
            this.setState( prevState => {
                return {
                    page: prevState.page - 1,
                };
            } );
            
        }else{
            this.setState( prevState => {
                this.getPicturesFromUnsplash( this.state.page + 1 );
                return {
                    page: prevState.page + 1,
                };
            } );
        }
    };
    
    changePerPage = ( number ) => {
        this.getPicturesFromUnsplash( this.state.page, number );
        this.setState( { totalPerPage: number } );
    };
    
    render(){
        return ( <div className={ "container" }>
            <div className={ "picture__buttons" }>
                <Button name={ "prev" }
                        onClick={ this.buttonPress }
                        disabled={ this.state.page === 1 }>Prev</Button>
                <Button onClick={ () => this.changePerPage( 10 ) }>10</Button>
                <Button onClick={ () => this.changePerPage( 20 ) }>20</Button>
                <Button onClick={ () => this.changePerPage( 30 ) }>30</Button>
                <Button name={ "next" }
                        onClick={ this.buttonPress }
                        disabled={ this.state.page <
                        this.state.maxPageNumber }>Next</Button>
            </div>
            <Row>
                <Form.Item label={ "Search Term" }>
                    <Input value={ this.state.term }
                           onChange={ this.onChange }
                           name={ "term" }
                    />
                </Form.Item>
            </Row>
            
            <Pictures pics={ this.state.pics }/>
        </div> );
    }
}

export default UnsplashApp;