import React from 'react'

const Buttons = ({ handleChange, value, title }) => {
  return (
    <button className='btn' onClick={handleChange} value={value}>{title}</button>
  )
}

export default Buttons;