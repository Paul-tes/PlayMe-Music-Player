import './App.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Song from './components/Song'
function App() {
  return (
    <div className='flex flex-col gap-2'>
      <NavBar />
      <SearchBar />
      <div className='carousel carousel-center rounded-box  space-x-4 p-4'>
        <Song  className='carousel-item' />
        <Song className='carousel-item' />
        <Song className='carousel-item' />
        <Song className='carousel-item' />
        <Song className='carousel-item' />
        
      </div>
    </div>
  )
}

export default App
