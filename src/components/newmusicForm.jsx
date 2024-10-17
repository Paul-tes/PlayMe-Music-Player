import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addSongRequest, updateSongRequest } from "../ReduxStore/Song/SongSlice"; // Updated to dispatch the request actions
import { useNavigate } from "react-router-dom";

function NewMusicForm({ song }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading: loading, error } = useSelector((state) => state.songs); // Updated selector to use `isLoading`

  const [name, setName] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');

  // Populate the form if editing an existing song
  useEffect(() => {
    if (song) {
      setName(song.name);
      setDescription(song.description);
      setGenre(song.genre);
    } else {
      resetForm(); // Reset the form when it's for adding a new song
    }
  }, [song]);

  // Reset form fields after submission
  const resetForm = () => {
    setName('');
    setGenre('');
    setDescription('');
  };

  // Handle form submission for new songs
  const handleSubmit = async (event) => { 
    event.preventDefault();

    // Ensure required fields are filled
    if (name && description && genre) {
      await dispatch(addSongRequest({ name, description, genre })); // Dispatch the request action for adding
      resetForm(); // Reset form after adding
      navigate("/"); // Redirect to homepage or song list after adding
    }
  };

  // Handle form submission for updating existing songs
  const handleUpdate = async (event) => {
    event.preventDefault();

    // Ensure required fields are filled
    if (name && description && genre) {
      await dispatch(updateSongRequest({ id: song.id, updatedSong: { name, description, genre } })); // Dispatch the request action for updating
      resetForm(); // Reset form after updating
      navigate("/"); // Redirect to homepage or song list after updating
    }
  };

  // Define genres for the dropdown
  const genres = [
    "Rock", "Pop", "Hip Hop", "Jazz", "Classical", "Electronic", "Reggae", "Country", "Blues",
    "Folk", "R&B", "Soul", "Metal", "Punk", "Disco", "Funk", "Gospel", "House", "Techno",
    "Dubstep", "Indie", "Latin", "Ska", "Trap", "K-Pop", "Afrobeats", "Ambient", "Opera"
  ];

  return (
    <form
      className="w-3/5 mt-24 m-auto flex flex-col gap-3"
      onSubmit={song ? handleUpdate : handleSubmit} // Use correct handler based on edit/add
    >
      <select
        className="select select-bordered w-full max-w-xs"
        value={genre}
        onChange={e => setGenre(e.target.value)} 
        required // Make sure a genre is selected
      >
        <option disabled value="">Select Genre</option>
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
          required // Name is required
        />
      </label>

      <textarea
        className="textarea textarea-primary"
        placeholder="Description"
        value={description}
        onChange={e => setDescription(e.target.value)}
        required // Description is required
      />

      <button 
        className="btn btn-primary"
        disabled={loading || !name || !description || !genre} // Disable button if fields are empty or request is in progress
      >
        {loading ? 'Processing...' : song ? 'Update Song' : 'Add New Song'}
      </button>

      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
    </form>
  );
}

export default NewMusicForm;
