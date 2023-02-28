import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counter';
import bankReducer from './reducers';

const store = configureStore({
  reducer: {
    counter: counterReducer,
    bank: bankReducer
  }
});

export default store;
