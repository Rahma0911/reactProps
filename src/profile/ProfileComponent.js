import React from "react";
import unknown from "./unknown.png";
import PropTypes from "prop-types";

const ProfileComponent = (props) => {
    const styleObject = {color:"blue" , textAlign:"left"}
    function handleName () {
        alert(props.fullName);
    }

    return(
    <div style={styleObject}>
        <h1>{props.fullName}</h1>
        <p>{props.bio}</p>
        <h2>{props.profession}</h2>
        <img src={props.imageURL} alt="" width="15%" />
        <br></br>
        <button onClick={handleName}>Show Name</button>
    </div>
);
};
ProfileComponent.defaultProps = {
    fullName:"ANONYMOUS",
    bio:"BIO",
    profession:"PROFESSION" , 
    imageURL: {unknown}
};
ProfileComponent.propTypes = {
    fullName:PropTypes.string,
    bio:PropTypes.string,
    profession:PropTypes.string,
    imageURL:PropTypes.string
};
export default ProfileComponent;