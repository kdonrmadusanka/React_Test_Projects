import React from 'react';
import './recomended.css';
import Buttons from '../../components/Buttons';

const Recomended = ({ handleChange }) => {
  return (
    <div className='recomended-container'>
        <h2 className='text'>Recommended</h2>
        <div className='recommended-flex'>
            <button className='btn' onClick={handleChange} value=''>All Products</button>
            <Buttons handleChange={handleChange} value='Nike' title='Nike' />
            <Buttons handleChange={handleChange} value='Adidas' title='Adidas'/>
            <Buttons handleChange={handleChange} value='Puma' title='Puma' />
            <Buttons handleChange={handleChange} value='Vans' title='Vans' />
        </div>
    </div>
  )
}

export default Recomended;