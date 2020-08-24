import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import { Jumbotron, Button } from "react-bootstrap";
import Home from "./components/Home";
import "react-typist/dist/standalone/Typist.css";

function App() {
    return (
        <React.Fragment>
            <div className="app">
                <Navigation></Navigation>
                <Home></Home>
            </div>
            <Jumbotron>
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style
                    component for calling extra attention to featured content or
                    information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
        </React.Fragment>
    );
}

export default App;
