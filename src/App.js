import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import DetailNabi from "./DetailNabi";
import Story from "./Story";
import NavBars from "./component/Navbar";
import Pray from "./Pray";
import DetailPray from "./component/DetailPray";
import "./css/style.css";
import HomeApp from "./HomeApp";

function App() {
  return (
    <BrowserRouter>
      <NavBars />
      <Routes>
        <Route path="/react_quran/" element={<HomeApp />}></Route>
        <Route path="/react_quran/surah/" element={<Home />}></Route>
        <Route path="/react_quran/surah/:key" element={<Detail />}></Route>
        <Route path="/react_quran/story/" element={<Story />}></Route>
        <Route path="/react_quran/story/:key" element={<DetailNabi />}></Route>
        <Route path="/react_quran/pray/" element={<Pray />}></Route>
        <Route path="/react_quran/pray/" element={<Pray />}></Route>
        <Route path="/react_quran/pray/:key" element={<DetailPray />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
