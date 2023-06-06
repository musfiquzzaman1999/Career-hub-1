import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Hero from './Component/Hero'
import Footer from './Component/Footer'
import { Outlet } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     
     <Header></Header>
     <div className='min-h-[calc(50vh-52px)]'>
      <Outlet></Outlet>
     </div>
     <Footer></Footer>
    </div>
  )
}

export default App
