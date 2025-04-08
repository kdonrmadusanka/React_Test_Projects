import React from 'react'
import Category from './category/Category'
import Color from './colors/Color'
import Price from './price/Price'
import './sideBar.css'

const SideBar = () => {
  return (
    <>
    <section className='sidebar-container'>
        <h2>🛒</h2>
        <div className='side-content'>
          <Category />
          <Color />
          <Price />
        </div>
    </section>
    </>
    
  )
}

export default SideBar;