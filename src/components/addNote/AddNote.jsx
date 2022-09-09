import "./AddNote.css";
import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/noteSlice";
import { useSelector } from "react-redux";
import { selectDarkMode } from "../../redux/themeSlice";

const AddNote = ({ modalOpen, setModalOpen }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const darkMode = useSelector(selectDarkMode);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef?.current?.focus();
  });

  const handleOnChange = (event) => {
    setValue(event.target.value);
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addNote({
        item: value,
      })
    );
    setValue("");
    setModalOpen(false);
  };

  return (
    <>
      {modalOpen && (
        <div className="wrapper">
          <div className="container">
            <form
              onSubmit={handleOnSubmit}
              className={`${!darkMode ? "whiteTheme" : "blackTheme"}`}
            >
              <div className="titleInput">
                <h1 className="formTitle">Notes:</h1>
                <input
                  className={`round ${!darkMode ? "whiteTheme" : "blackTheme"}`}
                  type="text"
                  placeholder="Write here ..."
                  value={value}
                  onChange={handleOnChange}
                  required
                  ref={inputRef}
                />
              </div>
              <div className="buttonContainer">
                <button
                  className={`round ${!darkMode ? "whiteTheme" : "blackTheme"}`}
                  type="submit"
                >
                  Add Task
                </button>
                <button
                  className={`round ${!darkMode ? "whiteTheme" : "blackTheme"}`}
                  type="button"
                  onClick={handleModalClose}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default AddNote;
