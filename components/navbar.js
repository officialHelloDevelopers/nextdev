'use client'
import Toggles from "./togles";
import { useState } from "react";
import './navbar.css'

function NavBar(prop) {
  return (
    <nav>
      <input
        type="text"
        name="search"
        id="search"
        placeholder='Search on this page....'
        value={prop.searchTerm}
        onChange={prop.handleSearchChange}
      />
      <input
        className="mobile"
        type="text"
        name="search"
        id="search"
        placeholder='Search...'
        value={prop.searchTerm}
        onChange={prop.handleSearchChange}
      />
      <div className="center">
        <img src="IMG_20250415_155941.png" alt="logo" />
        <h1>Hello, Developers!</h1>
      </div>

      <div className="right">
        <Toggles />
        <div className="hamburger" onClick={prop.toggleMenu}>
          <span className={`s1 ${prop.menuOpen ? 'rotated' : ''}`}></span>
          <span className={`s2 ${prop.menuOpen ? 'rotated2' : ''}`}></span>
          <span className={`s3 ${prop.menuOpen ? 'rotated3' : ''}`}></span>
        </div>
      </div>
    </nav>
  )
}
export default NavBar