import "./App.css";
import NoteBook from "./components/noteBook/NoteBook";
import NoteBookContent from "./components/noteBookContent/NoteBookContent";
import { useSelector } from "react-redux";
import { selectDarkMode } from "./redux/themeSlice";

function App() {
  const darkMode = useSelector(selectDarkMode);
  return (
    <div className={`App ${!darkMode ? "whiteBg" : ""}`}>
      <div className="app-container">
        <NoteBook />
        <div className="app-noteBookContent">
          <NoteBookContent />
        </div>
      </div>
    </div>
  );
}

export default App;
