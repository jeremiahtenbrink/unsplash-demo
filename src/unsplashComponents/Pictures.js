import React from "react";
import Picture from "./Picture";
import "./pictures.scss";

const Pictures = ( props ) => {
    return ( <div className={ "pictures" }>
        { props.pics.map( pic => {
            return <Picture pic={ pic }/>;
        } ) }
    </div> );
};

export default Pictures;