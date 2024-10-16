import { configureStore } from '@reduxjs/toolkit';
import SongReducer from './Song/SongSlice';
import createSagaMiddleware from 'redux-saga';
import { songSaga } from './Song/SongSaga';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    songs: SongReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware), // Use a function to correctly set middleware
});

// Run the saga
sagaMiddleware.run(songSaga);