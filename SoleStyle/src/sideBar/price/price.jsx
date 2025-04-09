import React from 'react';
import './price.css';
import Buttons from '../../components/Input';

const Price = () => {
  return (
    <div  className='category-container'>
      <h2 className='sidebar-title price-title'>Price</h2>

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

export default Price