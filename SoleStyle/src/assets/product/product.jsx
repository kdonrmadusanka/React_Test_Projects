import React from 'react';
import './product.css';

const Product = ({result}) => {
  return (
    <section className='container'>
        {result}
    </section>
  )
}

export default Product;