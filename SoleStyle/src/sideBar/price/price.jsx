import React from 'react';
import './price.css';
import Input from '../../components/Input';

const Price = ({ handleChange }) => {
  return (
    <div  className='category-container'>
      <h2 className='sidebar-title price-title'>Price</h2>

      <div>
        <Input handleChange={handleChange} title='All' value='' name='Price' />
        <Input handleChange={handleChange} title='$0 - $50' value={50} name='Price' />
        <Input handleChange={handleChange} title='$50 - $100' value={100} name='Price' />
        <Input handleChange={handleChange} title='$100 - $150' value={150} name='Price' />
        <Input handleChange={handleChange} title='Over $150' value={200} name='Price' />
      </div>
    </div>
  )
}

export default Price