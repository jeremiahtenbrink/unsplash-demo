import React from "react";
import { Modal } from "antd";

class Picture extends React.Component{
    debugger;
    state = {
        modalOpen: false,
    };
    
    toggleVisable = () => {
        this.setState( prevState => ( { modalOpen: !prevState.modalOpen } ) );
    };
    
    render(){
        return ( <div className={ "picture" }>
            <img onClick={ this.toggleVisable }
                 src={ this.props.pic.urls.thumb }/>
            <Modal
                title="Basic Modal"
                visible={ this.state.modalOpen }
                onOk={ this.toggleVisable }
                onCancel={ this.toggleVisable }
            >
                <div>
                    <img className={"unsplash_pic"} src={ this.props.pic.urls.full }/>
                </div>
                
            </Modal>
        </div> );
    }
};

export default Picture;