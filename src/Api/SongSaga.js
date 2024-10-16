import { call, put, takeEver, takeEvery } from 'redux-saga/effects'

function* songSaga() {
  yield takeEvery('songs/getSongsFetch', workGet)
}