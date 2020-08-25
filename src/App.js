import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/Welcome/Welcome";
import ProjectSection from "./components/ProfessionalSummary/ProfessioalSummary";
import AboutMe from "./components/AboutMe/AboutMe";

function App() {
    return (
        <React.Fragment>
            <div className="app">
                <Navigation></Navigation>
                <Home></Home>
            </div>
            <About></About>
            <ProjectSection></ProjectSection>
            <AboutMe></AboutMe>
        </React.Fragment>
    );
}

export default App;
