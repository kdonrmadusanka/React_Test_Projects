import React from 'react';
import './color.css';
import Buttons from '../../components/Input';

const Color = () => {
  return (
    <div className='category-container'>
      <h2 className='sidebar-title price-title'>Color</h2>

      <div>
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      <Buttons />
      </div>
    </div>
  )
}

export default Color;