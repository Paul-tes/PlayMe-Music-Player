import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/home'
function App() {
  return (
    <div className='flex flex-col gap-2'>
      <NavBar />
      <Home />
    </div>
  )
}

export default App
