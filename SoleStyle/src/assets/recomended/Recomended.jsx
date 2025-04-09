import React from 'react';
import './recomended.css';

const Recomended = () => {
  return (
    <div className='recomended-container'>
        <h2 className='text'>Recommended</h2>
        <div className='recommended-flex'>
            <button className='btn'>All Products</button>
            <button className='btn'>Nike</button>
            <button className='btn'>Addidas</button>
            <button className='btn'>Puma</button>
            <button className='btn'>Vans</button>
        </div>
    </div>
  )
}

export default Recomended;