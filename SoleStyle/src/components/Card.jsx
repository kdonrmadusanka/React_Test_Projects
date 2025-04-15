import React from 'react';
import { IoStarSharp } from "react-icons/io5";
import { IoBagCheck } from "react-icons/io5";

const Card = ({ img, title, reviews, newPrice, prevPrice }) => {
  return (
    <div className='item-box'>
            <img className='image' src={img}/>
            <section className='product-details'>
                <span className='item-name'>{title}</span>
                <div className='star-ratings'>
                    <IoStarSharp className='star' />
                    <IoStarSharp className='star' />
                    <IoStarSharp className='star' />
                    <IoStarSharp className='star' />
                    <IoStarSharp className='star' />
                    <span className='rating-count'>{reviews}</span>
                </div>
                <section className='price-bag'>
                    <del>{prevPrice}</del> 
                    <span className='new-price'>${newPrice}</span>
                    <IoBagCheck className='bag'/>
                </section>
            </section>
        </div>
  )
}

export default Card