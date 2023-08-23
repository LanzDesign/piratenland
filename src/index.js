import { createRoot } from "react-dom"; // Nutze createRoot von react-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/javascript/Home";
import Reservieren from "./components/javascript/reservieren";
import About from "./components/javascript/About";
import Regeln from "./components/javascript/regeln";
import { Sendmail } from "./components/javascript/Sendmail";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="regeln" element={<Regeln />} />
        <Route path="contact" element={<Sendmail />} />
        <Route path="reservieren" element={<Reservieren />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);
