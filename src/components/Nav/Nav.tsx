import React from 'react'
import { Link } from 'react-router-dom'

import './styles.css'

const Nav = () => {
  return (
    <div className="nav__container">
        <h1 className="nav-title">R3F Shaders</h1>
        <ul className="nav-links">
            <Link to="/" className="nav-links"><li>Wave</li></Link>
            <Link to="/colorwave" className="nav-links"><li>ColorWave</li></Link>
            <Link to="/perlinblob" className="nav-links"><li>Perlin Blob</li></Link>
            <Link to="/flag" className="nav-links"><li>Flag</li></Link>
            <Link to="/pattern" className="nav-links"><li>Pattern</li></Link>
            {/* <Link to="/mousecast" className="nav-links"><li>Mousecast</li></Link> */}
            <Link to="/particles" className="nav-links"><li>Particles</li></Link>
        </ul>
        <div className="nav-info">
            <p style={{color: "white"}}>info</p>
        </div>
    </div>
  )
}

export default Nav