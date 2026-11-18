import { Link, Outlet } from 'react-router-dom'

function App() {
  return (
    <>
      {/* Purple navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'purple' }}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">ShopKart</Link>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item"><Link className="nav-link" to="/home">Home</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/register">Register</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/about">About Us</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/contact">Contact Us</Link></li>
            </ul>

            <form className="d-flex">
              <input className="form-control me-2 bg-dark text-white" type="search" placeholder="Search" />
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>

      {/* Child page (Home / Login / Register) shows here */}
      <Outlet />
    </>
  )
}

export default App