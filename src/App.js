import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import NavBars from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <NavBars />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="surah/:key" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
