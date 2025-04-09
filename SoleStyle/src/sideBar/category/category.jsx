import React from 'react';
import './category.css'
import Buttons from '../../components/Input';

const Category = () => {
  return (
    <div className='category-container'>
      <h2 className='sidebar-title category-title'>Category</h2>
      
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

export default Category;