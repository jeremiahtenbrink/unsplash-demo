import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import UnsplashApp from "./UnsplashApp";
import "antd/dist/antd.css";

require( "dotenv" ).config();

ReactDOM.render( <UnsplashApp/>, document.getElementById( "root" ) );

