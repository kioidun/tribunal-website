import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../resources/images/logo.png";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import "./navbar.css";
import Dropdown from "../dropdown/Dropdown";

import { menuItems } from "../menuitems/menuItems";
import MenuItems from "../menuitems/MenuItemss";
import { FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Navbar = () => {
  const [isNavShowing, setIsNavShowing] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  return (
    <div>
      <nav>
        <div className="top-container">
          <div className="display">
            <Link
              to="/"
              className="logo"
              onClick={() => setIsNavShowing(false)}
            >
              <img src={Logo} alt="Tribunal Logo" />
            </Link>
          </div>
          <div className="display">
            <FaClock className="display-icons" />
            <div className="display-line">
              <h2>working hours</h2>
              <h4>Mon-Fri: 8am-5pm</h4>
            </div>
          </div>
          <div className="display">
            <FaLocationDot className="display-icons" />
            <div className="display-line">
              <h2>location</h2>
              <h4>Milimani Annex, 4 th Floor | Upper Hill Close</h4>
            </div>
          </div>
          <div className="display">
            <IoCall className="display-icons" />
            <div className="display-line">
              <h2>call us</h2>
              <h4>+254-730181895/91</h4>
            </div>
          </div>
          <div className="display">
            <MdEmail className="display-icons" />
            <div className="display-line">
              <h2>email us</h2>
              <h4>ort@court.go.ke</h4>
            </div>
          </div>
          <div className="display">
                 <div className='button-top'>
                      <Link className="button-link" to="http://causelist.court.go.ke/"   target="_blank"> Causelist </Link> 
                 </div>
             </div>
        </div>
        <div className="container nav_container">
          <Link to="/" className="logo" onClick={() => setIsNavShowing(false)}>
            {/* <img src={Logo} alt="Tribunal Logo" /> */}
          </Link>
          <ul
            className={`nav__links ${isNavShowing ? "show_Nav" : "hide_Nav"}`}
          >
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-nav" : "")}
                onClick={() => setIsNavShowing((prev) => !prev)}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-nav" : "")}
                onClick={() => setIsNavShowing((prev) => !prev)}
                to="/about"
              >
                About Us
              </NavLink>
            </li>

            <li
            // onMouseEnter={()=>setDropdown(true)} onMouseLeave={()=>setDropdown(false)}
            >
              {/* <NavLink className={({ isActive }) => isActive ? 'active-nav' : ''} onClick={() => setIsNavShowing(prev => !prev)} to=''>Tribunals</NavLink> */}

              {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <MenuItems items={menu} key={index} depthLevel={depthLevel} />
                );
              })}
            </li>

            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-nav" : "")}
                onClick={() => setIsNavShowing((prev) => !prev)}
                to="/team"
              >
                The Team
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-nav" : "")}
                onClick={() => setIsNavShowing((prev) => !prev)}
                to="/leadership"
              >
                Events
              </NavLink>
            </li>

            {/* <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-nav" : "")}
                onClick={() => setIsNavShowing((prev) => !prev)}
                to="/gallery"
              >
                Gallery
              </NavLink>
            </li> */}
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? "active-nav" : "")}
                onClick={() => setIsNavShowing((prev) => !prev)}
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
          <button
            className="nav_toggle-btn"
            onClick={() => setIsNavShowing((prev) => !prev)}
          >
            {isNavShowing ? <MdOutlineClose /> : <FaBars />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

//  import {menuItems} from '../menuItems'
//  import MenuItems from '../MenuItemss'

// const Navbar = ()=>{
//   return(
//     <nav>
//       <ul className='menus'>
// {
//   menuItems.map((menu, index)=>{
//     const depthLevel = 0;
//     return <MenuItems items={menu} key={index} depthLevel={depthLevel}/>
//   })
// }
//       </ul>
//     </nav>
//   )
// }

// export default Navbar
