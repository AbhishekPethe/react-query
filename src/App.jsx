import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './components/Home.page'
import SuperHeroes from './components/SuperHeroes.page.jsx' 
import RQSuperHero from './components/RQSuperHeroes.page.jsx'
import RQwithCustomHook from './components/RQwithCustomHook.jsx'
import RQSingleSuperHero from './components/RQSingleSuperHero.jsx'
import ParallelQueriesPage from './components/ParallelQueriesPage.jsx'
import DynamicParallelQueries from './components/DynamicParallelQueries.jsx'
import DependentQueries from './components/DependentQueries.page.jsx'
import PaginatedQueriespage from './components/PaginatedQueriespage.jsx'
import InfiniteQueries from './components/InfiniteQueries.jsx'
import PostDataQuery from './components/PostDataQuery.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className=''>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/superhero">SuperHero</Link></li>  
          <li><Link to="/rqsuperhero">RQSuperhero</Link></li>
          <li><Link to="/rqcustomhook">RQcustomhook</Link></li>   
          
          
        </ul>

        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/superhero" element={<SuperHeroes />} />
          <Route path="/rqsuperhero" element={<RQSuperHero />} />
          <Route path="/rqcustomhook" element={<RQwithCustomHook />} />
          <Route path="/rqsinglesuperhero/:id" element={<RQSingleSuperHero />} />
          <Route path='/rq-parallel' element={<ParallelQueriesPage />} />
          <Route path='/dynamic-parallel' element={<DynamicParallelQueries heroIds={[1, 3]} />} />
          <Route path='/rq-dependent' element={<DependentQueries email="abc@gmail.com" />} /> 
          <Route path="rq-paginated" element={<PaginatedQueriespage />} />
          <Route path="rq-infinite" element={<InfiniteQueries />} /> */}
          <Route path="rq-mutation" element={<PostDataQuery />} />
          
        </Routes>

      </div>
    </>
  )
}

export default App
