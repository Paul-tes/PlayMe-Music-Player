import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/home'
import CreateMusic from './pages/createMusics'
import UpdateMusic from './pages/updateMusic'
import Permium from './pages/permium'
import Contact from './pages/contact'
import Player from './components/Player'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className='flex flex-col gap-2'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<CreateMusic />} />
          <Route path='/edit/:id' element={<UpdateMusic />} />
          <Route path='/permium' element={<Permium />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Player />
      </BrowserRouter>
    </div>
  )
}

export default App
