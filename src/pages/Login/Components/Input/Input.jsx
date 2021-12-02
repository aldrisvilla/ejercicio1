import React from 'react'
import "../Input/Input.css"

const Input = ({attribute, handleChange, param}) => {
    return (
        <div>
            <input 
            name={attribute.name}
            type={attribute.type} 
            className="form-control"
            id={attribute.id} 
            placeholder={attribute.placeholder}
            onChange={(e)=> handleChange(e.target.name, e.target.value)}
            />
    
        </div>
    )
};

export default Input;
