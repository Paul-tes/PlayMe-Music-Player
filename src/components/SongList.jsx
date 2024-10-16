import Song from "./Song";



function SongList({songs}) {
  return (
    <div className='carousel carousel-end rounded-box gap-4 w-4/5 mt-6 m-auto'>
        {songs.map((song) => (
          <Song key={song.id} song={song}/>
        ))}
    </div>
  );
}

export default SongList;