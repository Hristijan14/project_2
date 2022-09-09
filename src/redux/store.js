import { configureStore } from "@reduxjs/toolkit";
import noteReducer from "../redux/noteSlice";
import themeReducer from "../redux/themeSlice";

export default configureStore({
  reducer: {
    note: noteReducer,
    theme: themeReducer,
  },
});
