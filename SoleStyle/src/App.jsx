import { useState } from 'react'
import Nav from './components/navigation/nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav/>
    </>
  )
}

export default App
