import "./NoteBook.css";
import AddNote from "../addNote/AddNote";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectDarkMode } from "../../redux/themeSlice";
import { toggleTheme } from "../../redux/themeSlice";
import light from "../../assets/images/sunIcon.png";
import dark from "../../assets/images/moonIcon.png";

const NoteBook = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const darkMode = useSelector(selectDarkMode);
  const dispatch = useDispatch();

  const handleModalOpen = () => {
    setModalOpen(true);
  };

  const handleOnClickTheme = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <div className="title-icon">
        <h1 className={`note-title ${!darkMode ? "whiteBg" : "blackBg"}`}>
          Note-book
        </h1>
        {darkMode ? (
          <img
            src={light}
            alt="lightmodeicon"
            className="themeIcon"
            onClick={handleOnClickTheme}
          />
        ) : (
          <img
            src={dark}
            alt="darkmodeicon"
            className="themeIcon"
            onClick={handleOnClickTheme}
          />
        )}
      </div>
      <div className="note-container">
        <button
          className={`addNote-btn ${!darkMode ? "whiteTheme" : "blackTheme"}`}
          onClick={handleModalOpen}
        >
          Add Note
        </button>
      </div>
      <AddNote modalOpen={modalOpen} setModalOpen={setModalOpen} />
    </div>
  );
};

export default NoteBook;
