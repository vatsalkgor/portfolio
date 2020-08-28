import React from "react";
import "./Tile.css";
import { Button } from "react-bootstrap";
export default function Tile({ project }) {
    return (
        <div className="project">
            <div className="text-center heading">{project.title}</div>
            <div className="subheading">
                <b>Description</b>
            </div>
            <div className="">{project.desc}</div>
            <div className="subheading">
                <b>Technologies</b>
            </div>
            <div>
                {project.tech.map((lang, i) => (
                    <li key={i}>{lang}</li>
                ))}
            </div>
            <div className="float-right">
                <Button>Show Details</Button>
            </div>
        </div>
    );
}
