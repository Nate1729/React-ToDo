import { createSlice } from '@reduxjs/toolkit';

interface State {
  value: string[],
}

const initialState = { value: [] } as State;

export const listSlice = createSlice({
  name: 'list',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload)
    },
    remove: (state, action) => {
      state.value = state.value.filter((el) => el !== action.payload)
    },
  },
});

export const { add, remove } = listSlice.actions;
