import React from "react";
import Home from "./components/Home/Home";
import { BrowserRouter } from "react-router-dom";
// compat.css is used because the animate.css has breaking
// changes which causes no animation at all
import "animate.css/animate.compat.css";

function App() {
    return (
        <BrowserRouter>
            <Home />
        </BrowserRouter>
    );
}

export default App;
