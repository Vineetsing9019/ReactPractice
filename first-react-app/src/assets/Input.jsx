import React, { useState } from 'react'

export default function Inputs() {
    const [username, setUsername] = useState('');

    function onInputChange(){
        console.log(event.target.value);// gives
        // current content of textbox
        setUsername(event.target.value);// sets the
        //isername state
        
    }
     
    function onBtnClick(){
        alert("Welcome "+username);
    }

  return (
    <>
    <h2>Basic way to accept input</h2>
     <Inputs type="text" onInputChange={onInputChange}/>
     <button onClick={onBtnClick}>Click Me</button>
    </>

  )
}