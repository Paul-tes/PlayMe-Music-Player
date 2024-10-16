import SearchBar from "../components/SearchBar";
import Song from "../components/Song";

function Home() {
  return(
    <>
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
    </>
  );
}

export default Home;