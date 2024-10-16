import './App.css'
import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import Song from './components/Song'
function App() {
  return (
    <div className='flex flex-col gap-2'>
      <NavBar />
      <SearchBar />
      <div className='carousel carousel-end rounded-box gap-4 w-4/5 mt-6 m-auto'>
        <Song />
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
        <Song/>
      </div>
    </div>
  )
}

export default App
