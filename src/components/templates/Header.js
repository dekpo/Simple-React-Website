import { NavLink } from 'react-router-dom';
import { Collapse } from 'bootstrap/dist/js/bootstrap.bundle';
import { useEffect, useState } from 'react';

const Header = () => {
  const [toggle,setToggle] = useState(false);

  useEffect( () => {
    const myNav = document.getElementById('navbarNav');
    const bootCollapse = new Collapse(myNav, {toggle: false});
    bootCollapse.hide(); 
  },[toggle])
 
  const hideNav = () => {
    setToggle(() => !toggle);
  }  
    return (
        <header className="mb-3">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <div className="container-fluid">
            <NavLink className="navbar-brand" to="/">
            <img src={ require('../../assets/logo-m2i.png').default } width="50" alt="logo" />
            </NavLink>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink activeClassName="active" exact className="nav-link" to="/" onClick={hideNav}  aria-current="page">Home</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" to="/carousel" onClick={hideNav}>Carousel</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink activeClassName="active" className="nav-link" onClick={hideNav} to="/gallery">Gallery</NavLink>
                </li>
                <li className="nav-item">
                <NavLink activeClassName="active"className="nav-link" onClick={hideNav} to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Header