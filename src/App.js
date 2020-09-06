import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Blogs from "./components/Blogs/Blogs";
// compat.css is used because the animate.css has breaking
// changes which causes no animation at all
import "animate.css/animate.compat.css";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Route
                component={() => {
                    window.scrollTo(0, 0);
                    return null;
                }}
            />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/blogs">
                    <Blogs />
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
