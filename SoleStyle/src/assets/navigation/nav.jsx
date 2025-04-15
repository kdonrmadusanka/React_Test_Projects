import React from 'react';
import './nav.css';
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Nav = ({ handleChange }) => {
  return (
    <div className='nav-bar'>
        <input type='text' placeholder='Search' onChange={handleChange}></input>
        <div className='icons'>
            <CiShoppingCart className='icon' />
            <CiUser className='icon' />
        </div>
    </div>
  )
}

export default Nav;