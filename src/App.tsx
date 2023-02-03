import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import CharactersList from "./pages/CharactersList";
import ComicsList from "./pages/ComicsList";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/characters" element={<CharactersList />} />
        <Route path="/comics" element={<ComicsList />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
