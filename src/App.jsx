import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home.page'
import SuperHeroes from './components/SuperHeroes.page.jsx' 
import RQSuperHero from './components/RQSuperHeroes.page.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/superhero">SuperHero</Link></li>  
          <li><Link to="/rqsuperhero">RQSuperhero</Link></li>  
          
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/superhero" element={<SuperHeroes />} />
          <Route path="/rqsuperhero" element={<RQSuperHero />} />
        </Routes>

      </div>
    </>
  )
}

export default App
