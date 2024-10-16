import { Link } from "react-router-dom";
import { FaGooglePlay } from "react-icons/fa6";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { FaEdit } from "react-icons/fa";
import { deleteSong } from "../ReduxStore/Song/SongSlice";
import { useDispatch } from "react-redux";

function Song({ song }) {

  const dispatch = useDispatch();

  const handleDelete = (songid) => {
    dispatch(deleteSong({ id: songid }));
  }
  return(
    <div className="card bg-base-100 image-full w-56 shadow-xl carousel-item">
      <figure>
        <img
          src="https://artists.apple.com/assets/artist-og-share-c766a5950ae664ea9073ede99da0df1094ae1a24bee32b86ab9e43e7e02bce2e.jpg"
          alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{song.name}</h2>
        <p>{song.description}</p>
        <p className="text-xl font-bold">{song.genre}</p>
        <div className="card-action flex gap-2">
          <button className="btn btn-outline"><FaGooglePlay /></button>
          <Link
            className="btn btn-outline btn-accent"
            to={`/edit/${song.id}`}
          >
            <FaEdit />
          </Link>
          <button
            className="btn btn-outline btn-error"
            onClick={() => handleDelete(song.id)}
          >
            <RiDeleteBin5Fill />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Song