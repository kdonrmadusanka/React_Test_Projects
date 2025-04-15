import React from 'react';
import './color.css';
import Input from '../../components/Input';

const Color = ({ handleChange }) => {
  return (
    <div className='category-container'>
      <h2 className='sidebar-title price-title'>Color</h2>

      <div>
      <div>
        <label className='sidebar-label-container'>
          <input type='radio' onChange={handleChange} value='' name='Color' />
          <span className='checkmark all' style={{border:"1px solid black"}}></span>All
        </label>
      </div>
      <Input handleChange={handleChange} title='Black' value='black' color='black' name='Color' />
      <Input handleChange={handleChange} title='Blue' value='blue' color='blue' name='Color' />
      <Input handleChange={handleChange} title='Red' value='red' color='red' name='Color' />
      <Input handleChange={handleChange} title='Green' value='green' color='green' name='Color' />
      <Input handleChange={handleChange} title='White' value='white' color='white' name='Color' />
      </div>
    </div>
  )
}

export default Color;