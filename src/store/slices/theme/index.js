import {createSlice} from '@reduxjs/toolkit';
import light from '../../../themes/light';
import dark from '../../../themes/dark';

export const themeSlice = createSlice({
  name: '@theme',
  initialState: {
    currentTheme: light,
  },
  reducers: {
    updateThemeToDark: draft => {
      draft.currentTheme = dark;
    },
    updateThemeToLight: draft => {
      draft.currentTheme = light;
    },
  },
});

export const {updateThemeToDark, updateThemeToLight} = themeSlice.actions;

export default themeSlice.reducer;
