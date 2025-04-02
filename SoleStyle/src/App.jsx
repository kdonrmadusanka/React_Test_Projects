import { useState } from 'react'
import Nav from './components/navigation/nav'
import Product from './components/product/product';
import Recomended from './components/recomended/recomended';
import SideBar from './sideBar/sideBar';
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
