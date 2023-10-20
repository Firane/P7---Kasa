import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Accueil from "./pages/Accueil";
import Logement from "./pages/logement";
import Header from "./components/Header/header";
import Footer from "./components/footer/footer";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/About" element={<About />} />
          <Route path="/logement" element={<Logement />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
