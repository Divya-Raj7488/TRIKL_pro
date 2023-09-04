import "./styles/App.css";
import DisplayImg from "./components/displayImg";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DisplayImg />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
