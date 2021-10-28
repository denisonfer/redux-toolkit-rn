import {createSlice} from '@reduxjs/toolkit';

export const websocketSlice = createSlice({
  name: 'websocket',
  initialState: {
    connectionRef: null,
  },
  reducers: {
    saveConnection: (draft, action) => {
      console.tron.log('action payload', action.payload);
    },
  },
});

export const {saveConnection} = websocketSlice.actions;

export default websocketSlice.reducer;
