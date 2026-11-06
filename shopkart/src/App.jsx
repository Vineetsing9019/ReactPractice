
import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
//import './App.css'

function App() {

  return (
    <>
      <nav className="navbar sm:navbar-expand bg-1 fg-2">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="btn-icon navbar-toggler" type="button" data-bs-toggle="drawer" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" aria-hidden="true"></span>
          </button>
          <dialog className="drawer drawer-end" tabIndex="-1" id="navbarNav" aria-labelledby="navbarNavLabel">
            <div className="drawer-header">
              <h5 className="drawer-title" id="navbarNavLabel">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="drawer" aria-label="Close"></button>
            </div>
            <div className="drawer-body">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                </li>
              </ul>
            </div>
          </dialog>
        </div>
      </nav>

      <div className="container-fluid">
        <div className="row"><Header />Navbar</div>
        <div className="row">Main content</div>
        <div className="row">Footer</div>
      </div>
    </>
  )
}

function Header() {
  return <h1>Header</h1>
}

export default App
