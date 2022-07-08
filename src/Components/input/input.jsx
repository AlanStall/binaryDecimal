import React from "react";
import "./input.css"

export const Input = ({
        label, id, handleChange, name, type, placeholder,  
    }) => (
    <>
      <div>        
        <label 
            htmlFor={id}>{label}
        </label>            
        <input 
          type={type || "textarea"} 
          name={name}
          id={id}       
          placeholder={placeholder}
          onChange={handleChange}         
          >
        </input>
      </div>          
      <br/>
    </>
  );
 
