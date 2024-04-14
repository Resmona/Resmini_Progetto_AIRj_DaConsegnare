//rafce
import React from "react";
import { Link } from 'react-router-dom';
import logo from "../../logo_AIRj.png";
import logo2 from "../../scritta_AIRj.png";
import './Header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="wrapper">
        <div>
        {/* <img src="logo.svg" alt="Company Logo" className="logo" /> */}
        <img src={logo} alt="Company Logo" className="logo" />

        <img  src={logo2} alt="Company Logo" className="logo" style={{marginLeft: '20px'}} />
        </div>
        <nav style={{display: 'flex', direction: 'column', justifyContent: 'end'}}>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">La nostra missione</Link></li>
            <li><Link to="/contact">Info</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
