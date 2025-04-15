import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {

    const isActiveCallback = ({isActive}) => {
        if(isActive){
            return 'link link-seleccionado'
        }
        else{
            return 'link'
        }
    }
  return (
    <header>
    <h2>FakeStore</h2>
    <nav>
        <NavLink 
            to={"/"}
            className={isActiveCallback}>Home
        </NavLink>
        <NavLink 
            to={"/contact"}
            className={isActiveCallback}>Contacto
        </NavLink>
    </nav>
    </header>
  )
}

export default NavBar
