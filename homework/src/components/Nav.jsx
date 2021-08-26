import React from 'react';
import Logo from '../img/sun.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav className="navbar">
      <Link to='/'>
        <span className="navbar-brand item">
          <img id="logoHenry" src={Logo} width="30" height="30" className="d-inline-block align-top" alt="" />
          Weather View
        </span>
      </Link>
      <SearchBar
          onSearch={onSearch}
        />
      <Link className='item' to='/'>
        <span className='item'>HOME</span>
      </Link>
      <Link className='item' to='/ciudad'>
        <span className='item'>CITY</span>
      </Link>
    </nav>
  );
};

export default Nav;
