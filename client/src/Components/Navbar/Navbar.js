import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../Assets/Logo/logo.png'

const Navbar = () => {
  return (
    <div className={styles.container}>
        <img src={logo} alt='logo' />
        <h1>URL Shortener</h1>
    </div>
  )
}

export default Navbar