import React from "react";
import "./styles/App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CharactersPage from "./pages/CharactersPage";
import ComicsPage from "./pages/ComicsPage";
import CharacterDetailPage from "./pages/CharacterDetailPage";
import ComicDetailPage from "./pages/ComicDetailPage";
import '@splidejs/react-splide/css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/characters/:id" element={<CharacterDetailPage />} />
          <Route path="/comics" element={<ComicsPage />} />
          <Route path="/comics/:id" element={<ComicDetailPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
