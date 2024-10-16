import NewMusicForm from "../components/newmusicForm";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";


function UpdateMusic() {
  const { id } = useParams();
  const { songs } = useSelector((state) => state.songs);
  const currentSong = songs.find(s => s.id == id);


  return <NewMusicForm song={currentSong} />
}

export default UpdateMusic;