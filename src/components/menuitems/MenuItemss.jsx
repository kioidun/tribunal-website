import { useState, useEffect, useRef } from "react";

import Dropdown from "../dropdown/Dropdown";
import { Link, NavLink } from "react-router-dom";

const MenuItemss = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  let ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <ul onClick={handleClick} className={click ? 'menu-items clicked' : 'menu-items'}>
    <li 
      key={items.id}
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {items.submenu ? (
        <>
          <button
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? "true" : "false"}
            onClick={() => setDropdown((prev) => !prev)}
            
          >
            {items.title}{" "}
            {depthLevel > 0 ? (
              <span> &raquo; </span>
            ) : (
              <span className="arrow" />
            )}{" "}
          </button>
          <Dropdown
          className="button-try"
            depthLevel={depthLevel}
            submenus={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
       
        <NavLink onClick={() => setClick(false)} to={items.path}> {items.title} </NavLink>
        
      )}{" "}
    </li>
    </ul>
  );
};

export default MenuItemss;
