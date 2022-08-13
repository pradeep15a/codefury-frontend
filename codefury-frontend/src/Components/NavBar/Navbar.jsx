import React from "react";
import { scaleDown as Menu } from "react-burger-menu";
import { Link, useLocation } from "react-router-dom";
import './Navbar.css'

const  Navbar = () => {
    const location = useLocation();

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

    </Menu>
  );
};

export default Navbar;