import "./App.css";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Mainpage from "./components/main/Mainpage";

import React from "react";
import Skills from "./components/skills/Skills";
import Qualification from "./components/qualification/Qualification";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <Mainpage />
        <About/>
        <Skills/>
        <Qualification/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
};

export default App;
