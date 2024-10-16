import SearchBar from "../components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import SongList from "../components/SongList";
import { fetchSongsRequest } from "../ReduxStore/Song/SongSlice";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const { songs, isLoading, error } = useSelector((state) => state.songs)

  useEffect(() => {
    dispatch(fetchSongsRequest());
  },[dispatch])
  return(
    <>
      <SearchBar />
      {isLoading && <p>Loading songs...</p>}
      {error && <p>Error fetching songs: {error}</p>}
      <SongList songs={songs} />
    </>
  );
}

export default Home;