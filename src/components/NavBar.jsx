import React from 'react'
import logo from './logo.png'

const NavBar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
            <div className="container-fluid">
                <a className="navbar-brand" href="http://www.concyssa.com">
                    <img src={logo} className="img-fluid" alt="..." width="100px" />
                </a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="http://www.concyssa.com">Inicio</a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="http://www.concyssa.com">Firmas</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="http://www.concyssa.com" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Consultas
                    </a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                      <li><a className="dropdown-item" href="http://www.concyssa.com">Action</a></li>
                      <li><a className="dropdown-item" href="http://www.concyssa.com">Another action</a></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><a className="dropdown-item" href="http://www.concyssa.com">Something else here</a></li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link disabled" href="http://www.concyssa.com" tabIndex="-1" aria-disabled="true">Administración</a>
                  </li>
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Buscar" />
                  <button className="btn btn-outline-success" type="submit">Buscar</button>
                </form>
              </div>
            </div>
          </nav>         
    </div>
  )
}

export default NavBar