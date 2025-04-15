import { useState } from 'react';
import Nav from './assets/navigation/Nav';
import Product from './assets/product/Product';
import Recomended from './assets/recomended/Recomended';
import SideBar from './sideBar/SideBar';
import Card from './components/Card';
import './app.css';

//Database
import products from './db/data'

function App() {
  const[selectCategory, setSelectCategory] = useState(null);
  const[query, setQuery] = useState('');

  //Input filter
  const handleInputChange = event => {
    setQuery(event.target.value)
  }

  const filteredItems = products.filter(product => {
    return product.title.toLowerCase().includes(query.toLowerCase());
  })

  //Radio filter
  const inputChange = event => {
    setSelectCategory(event.target.value);
  }

  //Button filter
  const handleClick = event => {
    setSelectCategory(event.target.value);
  }

  function flteredData(products, selectCategory, query){
    let filteredProducts = products;
    //filteing input items
    if(query){
      filteredProducts = filteredItems;
    }

    //Selected Filter
    if(selectCategory){
      filteredProducts = filteredProducts.filter(({ category, color, company, newPrice, title }) => category === selectCategory || color === selectCategory || company === selectCategory || newPrice === selectCategory || title === selectCategory );
    }

    return filteredProducts.map(({ img, title, reviews, prevPrice, newPrice }) => (
      <Card key={Math.random()} img={img} title={title} reviews={reviews} newPrice={newPrice} prevPrice={prevPrice} />
    ));
  }

  const result = flteredData(products, selectCategory, query)
  
  return (
    <>
    <div className='layout-container'>
      <SideBar className="sidebar" handleChange={inputChange} />
      <div className="main-content">
        <Nav query={query} handleChange={handleInputChange} />
        <Recomended handleChange={handleClick} />
        <Product result={result} />
      </div>
    </div>
    </>
  )
}

export default App
