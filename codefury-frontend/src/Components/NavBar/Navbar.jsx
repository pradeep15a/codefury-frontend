import React,{useState } from "react";
import { scaleDown as Menu } from "react-burger-menu";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import './Navbar.css'
import { LOGOUT, AUTH } from "../../Constants/constants";
import { useEffect } from "react";

const  Navbar = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user,setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const handleLogout = () => {
        dispatch ({ type: LOGOUT });
        navigate('/');
        setUser(null);
    }
    

    const homeClass = location.pathname === '/home' ? 'active-item' : ' ';
    const aboutClass = location.pathname === '/about' ? 'active-item' : ' ';
    const projectsClass = location.pathname === '/projects' ? 'active-item' : ' ';
    const contactClass = location.pathname === '/contact' ? 'active-item' : ' ';
  return (
    <Menu>
      <Link className={`menu-item ${homeClass}`} to="home">Home</Link>
      <Link className={`menu-item ${aboutClass}`} to="about">About Us</Link>
      <Link className={`menu-item ${projectsClass}`} to="projects">Project Ideas</Link>
      <Link className={`menu-item ${contactClass}`} to="contact">Contact</Link>
      {
        user && 
        <button className='menu-item' onClick={handleLogout}>Logout</button>
      }
    </Menu>
  );
};

export default Navbar;