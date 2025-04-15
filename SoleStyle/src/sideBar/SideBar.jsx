import React from 'react'
import Category from './category/Category'
import Color from './colors/Color'
import Price from './price/Price'
import './sideBar.css'

const SideBar = ({ handleChange }) => {
  return (
    <>
    <section className='sidebar-container'>
        <h2>🛒</h2>
        <div className='side-content'>
          <Category handleChange={ handleChange } />
          <Color handleChange={ handleChange } />
          <Price handleChange={ handleChange } />
        </div>
    </section>
    </>
    
  )
}

export default SideBar;