import React from 'react';
import "../Label/Label.css";

const Label = ({text}) => {
    return (
        <div className="container-label">
            <label>{text}</label>
        </div>

        
    )
}

export default Label;
