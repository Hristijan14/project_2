import React from "react";
import "./NoteTask.css";
import { useDispatch, useSelector } from "react-redux";
import { toggleNote, deleteNote } from "../../redux/noteSlice";
import { selectDarkMode } from "../../redux/themeSlice";

const NoteTask = ({ item, completed, id }) => {
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);

  const handleDeleteNote = () => {
    dispatch(deleteNote({ id: id }));
  };

  const handleOnChange = () => {
    dispatch(toggleNote({ id: id, completed: !completed }));
  };

  return (
    <li className={`list-group-item ${completed && `list-group-item-success`}`}>
      <div className="span-container">
        <span
          className={`span-items ${!darkMode ? "whiteTheme" : "blackTheme"}`}
        >
          <input
            type="checkbox"
            className="mr-3 "
            checked={completed}
            onChange={handleOnChange}
          />
          {item}
          <button className="btn btn-danger" onClick={handleDeleteNote}>
            Detele
          </button>
        </span>
      </div>
    </li>
  );
};

export default NoteTask;
