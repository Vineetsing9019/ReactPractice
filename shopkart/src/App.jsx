
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Home from './Home'
// import './App.css'

function App() {

  const myStyle = {
    backgroundColor: "#5a0364"
  }

  return (
    <>
      <div className="container-fluid">

        <div className="row">
          <nav className="navbar navbar-expand-lg"
            style={myStyle} data-bs-theme="dark">

            <div className="container-fluid">
              <a className="navbar-brand" href="#">ShopKart</a>

              <button className="navbar-toggler" type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation">

                <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav me-auto">

                  <li className="nav-item">
                    <a className="nav-link active" href="#">Home</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">Register</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">Login</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">About Us</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                  </li>

                </ul>

                <form className="d-flex" role="search">
                  <input className="form-control me-2"
                    type="search" placeholder="Search"
                    aria-label="Search" />
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
            <Home />
          </div>

        </div>

        <div className="row">Footer</div>

      </div>
    </>
  )
}

export default App
