import React from "react";

const Photo = props => {
    return(
    <div>
        <img src={this.props.src} alt="" />
        {this.props.children}
    </div>
    )
};
export default Photo;