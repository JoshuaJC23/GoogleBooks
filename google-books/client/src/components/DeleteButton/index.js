import React from "react";
import "./style.css";

function DeleteButton(props) {
    return (
        <span className = "delete-button" {...props} role="button" tabIndex="0"> </span>
    );
}

export default DeleteButton;