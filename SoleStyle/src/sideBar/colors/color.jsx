import React from 'react';
import './color.css'

const Color = () => {
  return (
    <div className='category-container'>
      <h2 className='sidebar-title price-title'>Color</h2>

      <div>
        <label className='sidebar-label-container'>
          <input type='radio' name='test' />
          <span className='checkmark'></span>All
        </label>
        <label className='sidebar-label-container'>
          <input type='radio' name='test' />
          <span className='checkmark'></span>Black
        </label>
        <label className='sidebar-label-container'>
          <input type='radio' name='test' />
          <span className='checkmark'></span>Blue
        </label>
        <label className='sidebar-label-container'>
          <input type='radio' name='test' />
          <span className='checkmark'></span>Red
        </label>
        <label className='sidebar-label-container'>
          <input type='radio' name='test' />
          <span className='checkmark'></span>Green
        </label>
        <label className='sidebar-label-container'>
          <input type='radio' name='test' />
          <span className='checkmark'></span>White
        </label>
      </div>
    </div>
  )
}

export default Color;