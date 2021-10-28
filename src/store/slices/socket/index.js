import {createSlice} from '@reduxjs/toolkit';

export const socketSlice = createSlice({
  name: 'socket',
  initialState: {
    status: null,
  },
  reducers: {
    updateStatus: (draft, action) => {
      console.tron.log(
        'socketSlice action updateStatus payload',
        action.payload,
      );
    },
  },
});

export const {updateStatus} = socketSlice.actions;

export default socketSlice.reducer;
