import React from 'react'

export default function Counter() {

    let count = 0;
    function onIncrement() {
        count++;
        console.log("updated count is" , count);
        
        
    }
  return (
    <div>
        <h2>Count is {count}</h2>
        <button onClick={onIncrement}>Increment</button>
        </div>
  )
}
