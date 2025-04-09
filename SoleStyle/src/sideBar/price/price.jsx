import React from 'react'
import './price.css'

const Price = () => {
  return (
    <div  className='category-container'>
      <h2 className='sidebar-title price-title'>Price</h2>

      <div>
        <label className='sidebar-label-container'>
          <input type='radio' name='test' />
          <span className='checkmark'></span>All
        </label>
        <label className='sidebar-label-container'>
          <input type='radio' name='test' />
          <span className='checkmark'></span>$0 - $50
        </label>
        <label className='sidebar-label-container'>
          <input type='radio' name='test' />
          <span className='checkmark'></span>$50 - $100
        </label>
        <label className='sidebar-label-container'>
          <input type='radio' name='test' />
          <span className='checkmark'></span>$100 - $150
        </label>
        <label className='sidebar-label-container'>
          <input type='radio' name='test' />
          <span className='checkmark'></span>$0 - $0
        </label>
      </div>
    </div>
  )
}

export default Price