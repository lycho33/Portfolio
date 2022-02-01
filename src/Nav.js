import React, { useState } from "react"



function Nav() {
    
    const [navbarOpen, setNavbarOpen] = useState(false)
    
  return <nav>
      <h3>Nav Bar</h3>
      <button>{navbarOpen ? "Close" : "Open"}</button>
      <ul></ul>
  </nav>;
}

export default Nav;
