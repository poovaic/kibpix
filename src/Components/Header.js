//import React from 'react'
import React, { useRef, useEffect } from 'react';

//import {NavLink} from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import logo from '../logo.png'
import './header.scss';


 function Header() {

//   const headerNav = [
//     {
//         display: 'Home',
//         path: '/'
//     },
//     {
//         display: 'Movies',
//         path: '/movie'
//     },
//     {
//         display: 'TV Series',
//         path: '/tv'
//     }
// ];
  //const { pathname } = useLocation();
    const headerRef = useRef(null);

    //const active = headerNav.findIndex(e => e.path === pathname);

    useEffect(() => {
        const shrinkHeader = () => {
            if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                headerRef.current.classList.add('shrink');
            } else {
                headerRef.current.classList.remove('shrink');
            }
        }
        window.addEventListener('scroll', shrinkHeader);
        return () => {
            window.removeEventListener('scroll', shrinkHeader);
        };
    }, []);
  return (
    <div ref={headerRef} className="header">
       <div className="links">
       <nav>
          <div className="logo">
            <img src={logo} alt=""/>
            <NavLink className = "navlink1" to={"/"}>KibPix</NavLink>
          </div>
          
          <div className="menu">
            <NavLink className = "navlink" to={"/"}>Home</NavLink>
            <NavLink className = "navlink" to={"/Movies"}>Movies</NavLink>
            <NavLink className = "navlink" to={"/TVShows"}>TVShows</NavLink>
          </div>
          </nav>
        </div>
    </div>
  )
}

export default Header
