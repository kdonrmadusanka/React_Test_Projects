import React from 'react'

const Input = ({ handleChange, title, value, name ,color }) => {
  return (
    <div>
        <label className='sidebar-label-container'>
          <input type='radio' onChange={handleChange} value={value} name={name} />
          <span className='checkmark' style={{backgroundColor:color, border:"1px solid black"}}></span>{title}
        </label>
    </div>
  )
}

export default Input;