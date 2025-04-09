import React from 'react';
import './nav.css';
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";

const Nav = () => {
  return (
    <div className='nav-bar'>
        <input type='text' placeholder='Search'></input>
        <div className='icons'>
            <CiShoppingCart />
            <CiUser />
        </div>
    </div>
  )
}

export default Nav;