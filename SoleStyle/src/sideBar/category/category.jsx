import React from 'react';
import './category.css'
import Input from '../../components/Input';

const Category = ({ handleChange }) => {
  return (
    <div className='category-container'>
      <h2 className='sidebar-title category-title'>Category</h2>
      
      <div>
        <Input handleChange={handleChange} title='All' value='' name='Category' />
        <Input handleChange={handleChange} title='Sneakers' value='sneakers' name='Category'/>
        <Input handleChange={handleChange} title='Flats' value='flats' name='Category' />
        <Input handleChange={handleChange} title='Sandals' value='sandals' name='Category' />
        <Input handleChange={handleChange} title='Heels' value='heels' name='Category' />
      </div>
    </div>
  )
}

export default Category;