import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  darkMode: true,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectDarkMode = (state) => state.theme.darkMode;

export default themeSlice.reducer;
