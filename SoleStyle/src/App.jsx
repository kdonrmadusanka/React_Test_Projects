import { useState } from 'react'
import Nav from './assets/navigation/Nav'
import Product from './assets/product/Product';
import Recomended from './assets/recomended/Recomended';
import SideBar from './sideBar/SideBar';
import './app.css';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='layout-container'>
      <SideBar className="sidebar" />
      <div className="main-content">
        <Nav />
        <Recomended />
        <Product />
      </div>
    </div>
    </>
  )
}

export default App
