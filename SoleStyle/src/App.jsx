import { useState } from 'react'
import Nav from './components/navigation/nav'
import Product from './components/product/product';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <Product />
    </>
  )
}

export default App
