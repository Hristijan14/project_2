import React from "react";
import NoteTask from "../noteTask/NoteTask";
import { useSelector } from "react-redux";
import { selectNoteList } from "../../redux/noteSlice";

const NoteBookContent = () => {
  const noteList = useSelector(selectNoteList);
  return (
    <div>
      {noteList?.map((note) => {
        return (
          <NoteTask
            item={note.item}
            completed={note.completed}
            id={note.id}
            key={note.id}
          />
        );
      })}
    </div>
  );
};

export default NoteBookContent;
