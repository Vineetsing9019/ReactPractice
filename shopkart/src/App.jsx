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
      <div className="row">Footer</div>
    </div>
  )
}

export default App
