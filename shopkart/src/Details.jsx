import React, { useEffect, useState } from 'react'
import {  NavLink, useParams } from 'react-router-dom'

export default function Details() {
   const params =  useParams(); // to capture the dynamic parameters
   // localhost:5173/details/3
   console.log(params); // {pid: 3}

   const [selectedProdObj, setSelectedProdObj] = useState(null);

   useEffect(()=>{    
        fetch(`https://dummyjson.com/products/${params.pid}`)
        .then(resp => resp.json())
        .then(data => {
            console.log(data);            
            setSelectedProdObj(data)
            })
        .catch(err => console.error(err));
   },[]);   

  return (
     selectedProdObj && 
        <div className="card mt-3">
            <h5 className="card-header">{selectedProdObj.title}</h5>
            <div className='row'>
                <div className='col-4'>
                    <img src={selectedProdObj.images[0]} width="100%" />
                </div>
                <div className='col-8'>
                    <div className="card-body">
                        <h5 className="card-title">Category: {selectedProdObj.category}</h5>
                        <h5 className="card-title">Brand: {selectedProdObj.brand}</h5>
                        <p>{selectedProdObj.description}</p>                     
                        <p>Return Policy: {selectedProdObj.returnPolicy}</p>
                        <p><strong>Price: $ {selectedProdObj.price}</strong></p>
                        <a href="#" className="btn btn-primary">Add To Cart</a>
                        <p><NavLink to={'/'} className="btn btn-primary mt-2">Back</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    
  )
}
