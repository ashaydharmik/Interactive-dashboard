import React from 'react'
import "./sidebar.scss"
import user from "../../assets/user.png"
import logo from "../../assets/logo.jpg"
import Teams from './Teams/Teams'
import Products from './Folders/Products'
const Sidebar = () => {
  return (
    <>
    <section className='sidebar-container'>
      <div className="sidebar-heading">
        <p className='logo'><img src={logo} alt='' /></p>
        <p className='title'><span>INC</span><span style={{fontWeight:"600"}}> InnovateHub</span></p>
        <p className='user'><img src={user} alt='' id='user'/></p>
      </div>
      <div className='sidebar-menu'>
        <Teams/>
        <Products/>
      </div>
 
    </section>
    </>
  )
}

export default Sidebar