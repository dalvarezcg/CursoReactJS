import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar'>
      <NavLink to="/">Iniciar Sesión</NavLink>
      <NavLink to="/productos">Productos</NavLink>
      <NavLink to="/producto-detalle">Detalle de Productos</NavLink>
    </div>
  )
}

export default Navbar
