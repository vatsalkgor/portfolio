import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import About from "./components/About/About";

function App() {
    return (
        <React.Fragment>
            <div className="app">
                <Navigation></Navigation>
                <Home></Home>
            </div>
            <About></About>
        </React.Fragment>
    );
}

export default App;
