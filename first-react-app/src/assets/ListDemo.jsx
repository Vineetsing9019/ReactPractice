import React, { useState } from 'react'

export default function ListDemo() {
    const [student, setStudent] = useState([
    {"id":101,"name":"Jay","age":23},
    {"id":102,"name":"Aadu","age":25},
    {"id":103,"name":"Abhi","age":23}
    ]);
      const [data, setData]= useState([10,20,30,40])
    function onInputNum(){
        const num = +event.target.value;
        SVGAnimatedNumber(n);
        // console.log("num is set");
        
    }
function onAdd() {
    setData((prev)=>[...prev,num])
}


  return (
    <>
    <h3>Student Data</h3>
    {
        student.map(obj =>
            <h6 key={obj.id}>{obj.name} {obj.age}</h6>
        )
    }
     {data.length>0 &&
        data.map(num => <h6 key={num}>{num}</h6>)
    }
{/*     
        {data &&
        data.map(num => <h6 key={num}>{num}</h6>)
     */}
    {/* } */}
    </>
    )
}