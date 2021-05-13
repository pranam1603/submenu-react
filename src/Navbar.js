import React from 'react'
import logo from './images/logo.svg'
import { FaBars } from 'react-icons/fa'
import { useGlobalContext } from './context'

const Navbar = () => {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext()

  const displaySubmenu = (e) => {
    const page = e.target.textContent
    const tarSub = e.target.getBoundingClientRect()
    const center = (tarSub.left + tarSub.right) / 2;
    const bottom = tarSub.bottom - 3
    openSubmenu(page, { center, bottom })
  }

  const handleClose = (e) => {
    if (!(e.target.classList.value === ('link-btn'))) {
      closeSubmenu()
    }
  }
  return <nav className="nav" onMouseOver={handleClose}>
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} />
        <button className="btn toggle-btn" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className="nav-links">
        <li className="link-btn" onMouseOver={displaySubmenu}>products</li>
        <li className="link-btn" onMouseOver={displaySubmenu}>developers</li>
        <li className="link-btn" onMouseOver={displaySubmenu}>company</li>
      </ul>
      <button className="btn signin-btn">SignIn</button>
    </div>
  </nav>
}

export default Navbar
