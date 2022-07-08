import React, { useState } from "react";
import { Input } from "../input/input"
import './app.css'

export function App() {
  const [binary, setBinary] = useState("");
  const [decimal, setDecimal] = useState("");

    function convertInput(){
      setDecimal(parseInt(binary, 2));     
    };     

    function clearInput(){
      const name = document.querySelector("#input-text");
      name.value = "";
    };

    function convertAndClearInput(){
      convertInput();
      clearInput();
    }

  return(
    <>
      <div id="border-solid">
        <Input           
          label="Enter any binary number" 
          id="input-text"         
          placeholder="Type only 0 or 1..." 
          handleChange={(e) => setBinary(e.target.value)}               
        ></Input> 
        <br></br>
        <button id="submit" onClick={convertAndClearInput}>Convert</button>
        <br></br>        
        <p>Binary:{binary}</p><strong className="decimal">Decimal: {decimal}</strong>      
      </div>      
    </>
  );
}

