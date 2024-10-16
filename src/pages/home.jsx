import SearchBar from "../components/SearchBar";
import { useSelector } from "react-redux";
import SongList from "../components/SongList";

function Home() {
  const { songs } = useSelector((state) => state.songs);
  return(
    <>
    <SearchBar />
    <SongList songs={songs}/>
    </>
  );
}

export default Home;