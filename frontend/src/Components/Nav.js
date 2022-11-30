import { NavLink } from "react-router-dom";
import React,{useState} from "react";
import "./Nav.css"

const Nav = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveClose, setisResponsiveClose] = useState(false);
    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setisResponsiveClose(isResponsiveClose === false ? true:false);
    }
    let boxClass = ["nav__container"];
    if (isMenu){
        boxClass.push('responsive__nav__show');

    }else{
        boxClass.push(''); 
    }
//  eslint-disable-next-line
    const [isMenuSubMenu, setMenuSubMenu] = useState(false);
    const toggleSubmenu = () => {
    setMenuSubMenu(isMenuSubMenu === false ? true : false);
  };

  let boxClassSubMenu = ["sub__menus"];
  if(isMenuSubMenu) {
    boxClassSubMenu.push('sub__menus__Active');
  }else {
    boxClassSubMenu.push('');
  }

  return (
    <div className='nav'>
        {isResponsiveClose === true ? <> 
        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} >   </span>
      </> : <> 
        <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass} >   </span>
      </>}
      <ul className={boxClass.join(' ')} >
        {/* --- Active  */}
        <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/">Home</NavLink></li>
  
        {/*--- Active  */}
        <li>
          <NavLink onClick={toggleClass} style={({ isActive }) => {
            return { 
              color: isActive ? "#ffe500" : ""
            };
          }} to="/About">About</NavLink>
        </li>
          <ul className={boxClassSubMenu.join(' ')} > 
            <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/Contact">Contact</NavLink></li>
            <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/Projects">Projects</NavLink></li>
          </ul>
        {/* </li> */}
        <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/Blog">Blog</NavLink></li>
        <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/Services">Services </NavLink></li>
        <li><NavLink onClick={toggleClass} className={({ isActive }) => isActive ? "active" : ""} to="/Resume">Resume/CV </NavLink></li>
      </ul>
    </div>
    );




}


export default Nav;