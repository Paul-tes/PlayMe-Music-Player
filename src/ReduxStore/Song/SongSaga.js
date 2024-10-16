import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSong,
  updateSong,
  deleteSong
} from './SongSlice';

// API calls
const fetchSongsApi = () => fetch('https://play-me-api.vercel.app/api/songs').then(res => res.json());
const addSongApi = (song) => fetch('https://play-me-api.vercel.app/api/songs', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(song)
}).then(res => res.json());
const updateSongApi = (id, song) => fetch(`https://play-me-api.vercel.app/api/songs/${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(song)
}).then(res => res.json());
const deleteSongApi = (id) => fetch(`https://play-me-api.vercel.app/api/songs/${id}`, {
  method: 'DELETE'
}).then(res => res.json());

// Worker saga: will be fired on fetchSongsRequest actions
function* fetchSongs() {
  try {
    const songs = yield call(fetchSongsApi);
    yield put(fetchSongsSuccess(songs));
  } catch (error) {
    yield put(fetchSongsFailure(error.message));
  }
}

// Worker saga for adding a song
function* handleAddSong(action) {
  const newSong = action.payload;
  try {
    const song = yield call(addSongApi, newSong);
    yield put(addSong(song));
  } catch (error) {
    console.error(error);
  }
}

// Worker saga for updating a song
function* handleUpdateSong(action) {
  const { id, updatedSong } = action.payload;
  try {
    const song = yield call(updateSongApi, id, updatedSong);
    yield put(updateSong({ id, updatedSong: song }));
  } catch (error) {
    console.error(error);
  }
}

// Worker saga for deleting a song
function* handleDeleteSong(action) {
  const { id } = action.payload;
  try {
    yield call(deleteSongApi, id);
    yield put(deleteSong({ id }));
  } catch (error) {
    console.error(error);
  }
}

// Watcher saga
export function* songSaga() {
  yield takeEvery(fetchSongsRequest.type, fetchSongs);
  yield takeEvery(addSong.type, handleAddSong);
  yield takeEvery(updateSong.type, handleUpdateSong);
  yield takeEvery(deleteSong.type, handleDeleteSong);
}