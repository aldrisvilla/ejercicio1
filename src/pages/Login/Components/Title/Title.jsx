import React from 'react';
import "../Title/Title.css";


const Title =({text,titulo}) => {
     
    return (
        <div className="title-container">
            <label> {text} </label>  
        </div>
    )
}
export default Title;