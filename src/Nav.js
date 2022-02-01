import React, { useState } from "react"



function Nav() {
    
    const [navbarOpen, setNavbarOpen] = useState(false)
    
    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
  return <nav>
      <h3>Nav Bar</h3>
      <button onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
      <ul className={`menuNav ${navbarOpen ? "showMenu" : ""}`}></ul>
  </nav>;
}

export default Nav;
