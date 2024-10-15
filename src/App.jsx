import './App.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'

function App() {
  return (
    <div className='flex flex-col gap-2'>
      <NavBar />
      <SearchBar />
    </div>
  )
}

export default App
