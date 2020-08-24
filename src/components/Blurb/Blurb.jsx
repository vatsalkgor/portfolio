import React from "react";
import Typist from "react-typist";
import "./Blurb.css";
import "react-typist/dist/Typist.css";

export default function Blurb() {
    return (
        <div className="blurb">
            <Typist
                startDelay={2000}
                avgTypingDelay={40}
                cursor={{ hideWhenDone: true }}
            >
                Vatsal is
                <br />
                <Typist.Delay ms={500}></Typist.Delay>* An Enthusiast Software
                Developer
                <br />
                <Typist.Delay ms={500}></Typist.Delay>* An Amature Writer
                <br />
                <Typist.Delay ms={500}></Typist.Delay>* An Adventurer
            </Typist>
        </div>
    );
}
