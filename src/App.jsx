import { Link, Route, Routes } from 'react-router-dom'
import './App.css'
import About from './pages/About'

function App() {
  return (
    <>
      <h2 className='text-center text-3xl'>RTK query</h2>
      <Routes>
        <Route path='/' element={<About/>}/>
      </Routes>
    </>
  )
}

export default App
