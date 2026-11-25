import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Home from './Home'
import {  NavLink, Outlet } from 'react-router-dom'
// import './App.css'

function App() {
  const myStyle = {
      backgroundColor: "#5a0364"
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg "
        style={ myStyle }  data-bs-theme="dark" >
  <div className="container-fluid">
    {/* <a className="navbar-brand" href="/">ShopKart</a> */}
    <NavLink className="navbar-brand" to={"/"}>ShopKart</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          {/* <a className="nav-link active" aria-current="page"
           href="/">Home</a> */}
          <NavLink className="nav-link" to={'/'}>Home</NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Contact Us</a> */}
           <NavLink className="nav-link" to={"/add-product"}>
           Add Product</NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/register">Register</a>
           */}
           <NavLink className="nav-link" to={'/register'}>Register</NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="/login">Login</a> */}
          <NavLink className="nav-link" to={'/login'}>Login</NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">About Us</a> */}
          <NavLink className="nav-link" to={"/aboutus"}>About Us</NavLink>
        </li>
        <li className="nav-item">
          {/* <a className="nav-link" href="#">Contact Us</a> */}
           <NavLink className="nav-link" to={"/contactus"}>
           Contact Us</NavLink>
        </li>
       
        
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
        </nav>
      </div>
      <div className="row">
        <div className="col-2 bg-tertiary">
            <h5><a href="">All</a></h5>
            <h5><a href="">Electronics</a></h5>
            <h5><a href="">Fresh Veggies</a></h5>
            <h5><a href="">Furniture</a></h5>            
        </div>
        <div className="col-10">
          <Outlet /> 
          {/* its a placeholder that renders the child component */}
        </div>
      </div>
      <div className="row mt-2" style={myStyle}>
            <div className='col-6 p-2'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.171820750498!2d72.9739874!3d19.1876963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b8d834c00235%3A0x89ff617b4a6cbf6f!2sItvedant%20-%20Thane!5e0!3m2!1sen!2sin!4v1795406975627!5m2!1sen!2sin" width="400" height="300" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
            </div>
            <div className='col-6 p-2'>

            </div>
      </div>
    </div>
  )
}

export default App
