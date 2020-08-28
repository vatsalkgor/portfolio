import React from "react";
import "./Home.css";
import Navigation from "../Navigation";
import Title from "../Title";
import About from "../Welcome/Welcome";
import ProfessionalSummary from "../ProfessionalSummary/ProfessionalSummary";
import AboutMe from "../AboutMe/AboutMe";
import Future from "../Future/Future";

export default function Home() {
    return (
        <>
            <div className="app">
                <Navigation transparent={true} />
                <Title />
            </div>
            <About />
            <ProfessionalSummary />
            <AboutMe />
            <Future />
        </>
    );
}
