import { Routes, Route, MemoryRouter } from "react-router-dom";
import Header from "./Components/NavBar/Header";
import Home from "./Components/SectionMain/Home";
import Projects from "./Components/ProjectSection/ControlMain/Projects";
import Skills from "./Components/SecSkills/Skills";
import MyWork from "./Components/ProjectSection/Work/MyWork";
import GetInTouch from "./Components/ProjectSection/Communocation/GetInTouch";
import PersonalInfo from "./Components/ProjectSection/MyInformation/PersonalInfo";
import Footer from "./Components/Footer/Footer";
import "./App.css";
import { useEffect } from "react";

function App() {
  ////////////////////////////////
 
  /////////////////////////////////
  document.title = "Portfolio Motaz";
  ////////////////////////////////
  return (
    <MemoryRouter>
      <Header />
      <Home />
      <Skills />
      <Projects />
      <Routes>
        <Route
          index
          element={
            <>
              <MyWork />
              <GetInTouch />
            </>
          }
        />
        <Route
          path="/GetInTouch"
          element={
            <>
              <GetInTouch />
            </>
          }
        />
        <Route
          path="/PersonalInfo"
          element={
            <>
              <PersonalInfo />
              <GetInTouch />
            </>
          }
        />
      </Routes>
      <Footer />
    </MemoryRouter>
  );
}

export default App;
