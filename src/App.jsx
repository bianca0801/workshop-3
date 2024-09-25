import { useState } from 'react'
import './App.css'
import Header from './Header'
import Header2 from './Header2'
//import Navbar from './Navbar'
import Example from './Hero'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-blue-500 min-h-screen"> 
            <Header/>
            <Example/>
            <Header2/>
      </div>
  )
}

export default App
