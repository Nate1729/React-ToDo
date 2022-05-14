import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';

import { listSlice } from 'components/ToDoList/slice';

export const reducer = combineReducers({
  list: listSlice.reducer
});


const preloadedState = {
  list: {
    value: ['potato', 'two', 'three'],
  },
};

export const store = configureStore({
  reducer,
  preloadedState,
});
