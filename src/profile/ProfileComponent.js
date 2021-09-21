import React from "react";
import Photo from "./Photo";
import picture from "./picture.jpg";
import PropTypes from "prop-types";

const ProfileComponent = (props) => {
    const styleObject = {color:"blue" , textAlign:"left"}
    return(
    <div style={styleObject}>
        <h1>{props.fullName}</h1>
        <p>{props.bio}</p>
        <h2>{props.profession}</h2>
        <Photo src={picture} alt="" />
        <handleName name = {props.fullName}/>;
    </div>
);
};
ProfileComponent.defaultProps = {
    fullName:"ANONYMOUS",
    bio:"BIO",
    profession:"PROFESSION"  
};
ProfileComponent.propTypes = {
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string
};
export default ProfileComponent;