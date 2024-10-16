import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addSong, updateSong } from "../ReduxStore/Song/SongSlice";
import { useNavigate } from "react-router-dom";

function NewMusicForm({ song }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (song) {
      setName(song.name);
      setDescription(song.description);
      setGenre(song.genre);
    }
  }, [song])

  const handleSubmit = (event) => { 
    event.preventDefault();
    dispatch(addSong({ name, description, genre }));
    navigate("/");
  }

  const handleUpdate = (event) => {
    event.preventDefault();
    dispatch(updateSong({ id: song.id, updatedSong: { name, description, genre } }))
    navigate("/");
  }

  const genres = [
    "Rock", "Pop", "Hip Hop", "Jazz", "Classical", "Electronic", "Reggae", "Country", "Blues",
    "Folk", "R&B", "Soul", "Metal", "Punk", "Disco", "Funk", "Gospel", "House", "Techno",
    "Dubstep", "Indie", "Latin", "Ska", "Trap", "K-Pop", "Afrobeats", "Ambient", "Opera"
  ];

  return (
    <form
      className="w-3/5 mt-24 m-auto flex flex-col gap-3"
      onSubmit={
        song ? handleUpdate : handleSubmit
      }
    >
      <select
        className="select select-bordered w-full max-w-xs"
        value={genre}
        onChange={e => setGenre(e.target.value)} 
      >
        <option disabled value="">Genre</option>
        {genres.map((genre, index) => (
          <option key={index} value={genre}>{genre}</option>
        ))}
      </select>

      <label className="input input-bordered flex items-center gap-2">
        Name:
        <input
          type="text"
          className="grow"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>

      <textarea
        className="textarea textarea-primary"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />

      <button className="btn btn-primary">{song ? 'Update' : 'new'}</button>
    </form>
  );
}

export default NewMusicForm;
