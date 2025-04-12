import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div>
      <header>
        <h2>FakeStore</h2>
        <nav>
            {/*<a href="/">Home con ancla</a>
            <Link to={"/"}>Inicio</Link>
            <Link to={"/contact"}>Contactanos</Link>*/}
            <NavLink 
                to={"/"}
                className={
                    ({isActive}) => {                  
                
                    if (isActive) {
                        return "link"                    
                    }
                    else{
                        return "link link-seleccionado"
                    }
                }}
                >Home
            </NavLink>
        </nav>
      </header>
    </div>
  )
}

export default NavBar
