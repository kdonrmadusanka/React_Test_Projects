import React from 'react';
import './category.css'
import Input from '../../components/Input';

const Category = ({ handleChange }) => {
  return (
    <div className='category-container'>
      <h2 className='sidebar-title category-title'>Category</h2>
      
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

export default Category;