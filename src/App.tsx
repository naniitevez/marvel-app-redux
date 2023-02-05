import React from "react";
import "./styles/App.scss";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import CharactersPage from "./pages/CharactersPage";
import ComicsPage from "./pages/ComicsPage";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<CharactersPage />} />
          <Route path="/comics" element={<ComicsPage />} />
        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
