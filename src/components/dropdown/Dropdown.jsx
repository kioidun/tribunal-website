// import React from 'react'
// import { useState } from 'react'
// import { MenuItems } from '../../data'
// import { tribunals,tribunals2,tribunals3 } from '../../data'
// import { Link } from 'react-router-dom'
// import './dropdown.css'

// const Dropdown = () => {
//     const [click, setClick] = useState(false)
//     const handleClick = () => setClick(!click)

//     return (

//         <div className='arra'>
//             <div className='firstdiv'>
//             <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
//                 {tribunals.map((item, id) => {
//                     return (
//                         <li key={id}>
//                             <Link className={item.cname} to={`/jurisdiction/${id}`} onClick={() => setClick(false)} >
//                                 {item.name}
//                             </Link>
//                         </li>
//                     )
//                 })}
//             </ul>
//             </div>
//                 <div className='seconddiv'>
//             <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
//                 {tribunals2.map((item, id) => {
//                     return (
//                         <li key={id}>
//                             <Link className={item.cname} to={`/jurisdiction/${id}`} onClick={() => setClick(false)} >
//                                 {item.name}
//                             </Link>
//                         </li>
//                     )
//                 })}
//             </ul>
//             </div>
//             <div className='thirddiv'>
//             <ul onClick={handleClick} className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}>
//                 {tribunals3.map((item, id) => {
//                     return (
//                         <li key={id}>
//                             {console.log(item.id)}
//                             <Link className={item.cname} to={`/jurisdiction/${id}`} onClick={() => setClick(false)} >
//                                 {item.name}
//                             </Link>
//                         </li>
//                     )
//                 })}
//             </ul>
//             </div>
//         </div>
//     )
// }

// export default Dropdown

import MenuItemss from "../menuitems/MenuItemss";
const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
      {submenus.map((submenu, index) => (
        <MenuItemss items={submenu} key={index} depthLevel={depthLevel} />
      ))}{" "}
    </ul>
  );
};

export default Dropdown;
