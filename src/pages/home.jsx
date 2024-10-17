import SearchBar from "../components/SearchBar";
import { useSelector, useDispatch } from "react-redux";
import SongList from "../components/SongList";
import { fetchSongsRequest } from "../ReduxStore/Song/SongSlice";
import { useEffect } from "react";
import { BlinkBlur } from "react-loading-indicators";

function Home() {
  const dispatch = useDispatch();
  const { songs, isLoading, error } = useSelector((state) => state.songs)

  useEffect(() => {
    dispatch(fetchSongsRequest());
  },[dispatch])
  return(
    <>
      <SearchBar />
        {
          isLoading
          &&
          <div className="w-1/2 m-auto mt-16">
            <BlinkBlur color="#ef1a1d" size="medium" text="" textColor="" />
          </div>
        }
      {error && <p>Error fetching songs: {error}</p>}
      <SongList songs={songs} />
    </>
  );
}

export default Home;