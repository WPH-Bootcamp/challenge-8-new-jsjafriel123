import { Routes, Route } from "react-router-dom";
// import { useState } from "react";
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import Header from "./components/HeaderSection";
import Footer from "./components/FooterSection";
import { HomePage } from "./pages/HomePage";
import { DetailPage } from "./pages/DetailPage";
import "./App.css";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<DetailPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
