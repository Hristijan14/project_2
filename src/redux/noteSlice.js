import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
  name: "note",
  initialState: [],
  reducers: {
    addNote: (state, action) => {
      const newNote = {
        id: Date.now(),
        item: action.payload.item,
        completed: false,
      };
      state.push(newNote);
    },
    toggleNote: (state, action) => {
      const index = state.findIndex((note) => note.id === action.payload.id);
      state[index].completed = action.payload.completed;
    },
    deleteNote: (state, action) => {
      return state.filter((note) => note.id !== action.payload.id);
    },
  },
});

export const { addNote, toggleNote, deleteNote } = noteSlice.actions;

export const selectNoteList = (state) => state.note;

export default noteSlice.reducer;
