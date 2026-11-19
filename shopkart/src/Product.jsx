import React from 'react'
import './Product.css'
import { NavLink } from 'react-router-dom';

export default function Product(props) {
  console.log(props);
  const productObject = props.obj;
  const name = props.name;
  
  return (
    <div className="col-4 mt-2">
      {/* Card  - {name} */}
      <div className="card card-hover" style={{ width: "100%" }}>
        <img src={productObject.images[0]} className="card-img-top" alt="..." height="200px" />
        <div className="card-body">
          <h5 className="card-title">{productObject.title}</h5>
          <h6>Category: {productObject.category}</h6>
          <p className="card-text">{productObject.description.slice(0,50)} <a href="">Read More</a> </p>
          <p>Price: <strong>$ {productObject.price}</strong></p>
          <NavLink to={`/details/${productObject.id}`} className="btn btn-primary">Details</NavLink>
          <a href="#" className="btn btn-danger ms-2">Delete</a>
          <a href="#" className="btn btn-warning ms-2">Update</a>
        </div>
      </div>
    </div>
  )
}
