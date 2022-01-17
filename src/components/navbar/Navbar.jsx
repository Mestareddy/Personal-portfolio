import React from "react";
import "./navbar.scss";
// import PersonIcon from '@mui/icons-material/Person';
// import EmailIcon from '@mui/icons-material/Email';
// import MenuIcon from "@mui/icons-material/Menu";


const Navbar = ({menuOpen, setMenuOpen}) => {
  return (
    <div className={"navbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            edikan.bassey
          </a>
          <div className="itemContainer">
            <i className="fa-solid fa-phone icon"></i>
            <span>+234 818 239 6028</span>
          </div>
          <div className="itemContainer">
            <i className="fas fa-envelope icon"></i>
            <span>edikan.i.bassey@gmail.com</span>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
