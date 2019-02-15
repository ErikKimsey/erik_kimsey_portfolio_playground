import React from 'react';
import { Link } from 'react-router-dom';
import './nav.scss';

const Nav = () => {
  return (
    <div className="nav-container">
      {/* <Link to=""></Link> */}
      <ul>
        <li>
          <Link to="/">home</Link>
        </li>
        <li>
          <Link to="/about">me</Link>
        </li>
        <li>
          <Link to="/work">work</Link>
        </li>
        <li>
          <Link to="/contact">contact me</Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav;