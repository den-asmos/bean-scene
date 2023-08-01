import { useState } from 'react';
import { AiOutlineMenu } from 'react-icons/ai';
import { IoIosClose } from 'react-icons/io';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <h1>Bean Scene</h1>
      </div>

      <ul className="app__navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#about">About Us</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>

      <div className="app__navbar-login">
        <p>Sign In</p>
        <button className="btn">Sign Up</button>
      </div>

      <div className="app__navbar-smallscreen">
        {toggleMenu ? (
          <>
            <IoIosClose
              onClick={() => setToggleMenu(false)}
              className="navbar__close"
            />
            <ul className="app__navbar-smallscreen_links">
              <li onClick={() => setToggleMenu(false)}>
                <a href="#home">Home</a>
              </li>
              <li onClick={() => setToggleMenu(false)}>
                <a href="#menu">Menu</a>
              </li>
              <li onClick={() => setToggleMenu(false)}>
                <a href="#about">About Us</a>
              </li>
              <li onClick={() => setToggleMenu(false)}>
                <a href="#contact">Contact Us</a>
              </li>
              <li onClick={() => setToggleMenu(false)}>
                <a href="#">Sing In</a>
              </li>
            </ul>
          </>
        ) : (
          <AiOutlineMenu
            onClick={() => setToggleMenu(true)}
            className="navbar__menu"
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
