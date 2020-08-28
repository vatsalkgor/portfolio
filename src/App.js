import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
// compat.css is used because the animate.css has breaking
// changes which causes no animation at all
import "animate.css/animate.compat.css";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/projects">
                    <Projects />
                </Route>
                <Route path="/blogs">
                    <div>Blogs</div>
                </Route>
            </Switch>
            <Footer />
        </BrowserRouter>
    );
}

export default App;
