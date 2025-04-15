import React from 'react';
import './color.css';
import Input from '../../components/Input';

const Color = () => {
  return (
    <div className='category-container'>
      <h2 className='sidebar-title price-title'>Color</h2>

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

export default Color;