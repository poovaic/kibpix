import React from 'react'
import {NavLink} from 'react-router-dom';
import logo from '../logo.png'

function Header() {
  return (
    <div>
       <div className="links">
       <nav>
          <div className="logo">
                    <img src={logo} alt="" />
                    <NavLink to={"/"}>KibPix</NavLink>
          </div>
          
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/Movies"}>Movies</NavLink>
            <NavLink to={"/TVShows"}>TVShows</NavLink>
          </nav>
        </div>

        
    </div>
  )
}

export default Header
