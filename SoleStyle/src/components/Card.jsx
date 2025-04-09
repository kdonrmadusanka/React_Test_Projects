import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import { IoBagCheck } from "react-icons/io5";

const Card = () => {
  return (
    <div className='item-box'>
            <img className='image' src='https://m.media-amazon.com/images/I/6125yAfsJKL._AC_UX575_.jpg'/>
            <section className='product-details'>
                <span className='item-name'>Shoe</span>
                <div className='star-ratings'>
                    <IoStarSharp className='star' />
                    <IoStarSharp className='star' />
                    <IoStarSharp className='star' />
                    <IoStarSharp className='star' />
                    <IoStarSharp className='star' />
                    <span className='rating-count'>4</span>
                </div>
                <section className='price-bag'>
                    <del>$300</del> 
                    <span className='new-price'>$200</span>
                    <IoBagCheck className='bag'/>
                </section>
            </section>
        </div>
  )
}

export default Card