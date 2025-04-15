import React from 'react';
import './price.css';
import Input from '../../components/Input';

const Price = () => {
  return (
    <div  className='category-container'>
      <h2 className='sidebar-title price-title'>Price</h2>

      <div>
        <Input />
        <Input />
        <Input />
        <Input />
        <Input />
      </div>
    </div>
  )
}

export default Price