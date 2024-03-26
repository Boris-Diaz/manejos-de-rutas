import "./App.css";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import Atanagildo from "./paginas/Atanagildo";
import Ataulfo from "./paginas/Ataulfo";
import Ervigio from "./paginas/Ervigio";
import Leovigildo from "./paginas/Leovigildo";
import Recesvinto from "./paginas/Recesvinto";
import Sisebuto from "./paginas/Sisebuto";
import Home from "./paginas/Home";
import Error404 from "./paginas/Error404";
import Nav from "./Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/atanagildo" element={<Atanagildo />} />
        <Route path="/ataulfo" element={<Ataulfo />} />
        <Route path="/ervigio" element={<Ervigio />} />
        <Route path="/leovigildo" element={<Leovigildo />} />
        <Route path="/leogivildo" element={<Navigate to="/Leovigildo" />} />
        <Route path="/recesvinto" element={<Recesvinto />} />
        <Route path="/sisebuto" element={<Sisebuto />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
