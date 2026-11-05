import React, { useState } from 'react'

export default function Counter() {

    // useState is react lifecycle method for state managment
    // we need to set the defualt value for state ===> 0
    // it return an arrey with 2 value ==> first state and method to update the state 

   // let count = 0;

   /* function onIncrement(){
        count++;
        console.log("update count is " , count); */
    }

const [count,setCount] = useState(0);

function onIncrement(){
    // count++
    setCount(count + 1);  //setCount(1);

    // 1. react will update the state
    // 2. for every state change,react will re-render the entire component
    // it update the virtual dom
    // react will compare the virtual DOM with the real DOM and update only the changed part in the real DOM
}


  return (
    <div>

        <h2> Count is {count} </h2>
        <button onClick={onIncrement}>Increment</button>
        
         </div>
  )