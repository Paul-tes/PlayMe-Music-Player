import { call, put, takeEvery } from 'redux-saga/effects';
import {
  fetchSongsRequest,
  fetchSongsSuccess,
  fetchSongsFailure,
  addSongRequest,
  addSongSuccess,
  addSongFailure,
  updateSongRequest,
  updateSongSuccess,
  updateSongFailure,
  deleteSong
} from './SongSlice';

const BASE_URL = 'https://play-me-api.vercel.app/api/songs';

// API calls
const fetchSongsApi = () => fetch(BASE_URL).then(res => res.json());
const addSongApi = (song) => fetch(BASE_URL, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(song)
}).then(res => res.json());
const updateSongApi = (id, song) => fetch(`${BASE_URL}/${id}`, {
  method: 'PUT',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(song)
}).then(res => res.json());
const deleteSongApi = (id) => fetch(`${BASE_URL}/${id}`, {
  method: 'DELETE'
}).then(res => res.json());

// Worker saga for fetching songs
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
  try {
    const newSong = yield call(addSongApi, action.payload);
    yield put(addSongSuccess(newSong));
  } catch (error) {
    yield put(addSongFailure(error.message));
  }
}

// Worker saga for updating a song
function* handleUpdateSong(action) {
  const { id, updatedSong } = action.payload;
  try {
    const song = yield call(updateSongApi, id, updatedSong);
    yield put(updateSongSuccess({ id, updatedSong: song }));
  } catch (error) {
    yield put(updateSongFailure(error.message));
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
  yield takeEvery(addSongRequest.type, handleAddSong);
  yield takeEvery(updateSongRequest.type, handleUpdateSong);
  yield takeEvery(deleteSong.type, handleDeleteSong);
}
