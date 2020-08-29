import React from "react";
import "./Tile.css";
import { Button } from "react-bootstrap";

export default function Tile({ project, setModalProps }) {
    return (
        <div className="project">
            <div className="text-center heading">{project.title}</div>
            <div className="subheading">
                <b>Description</b>
            </div>
            <div className="text-justify">{project.desc}</div>
            <div className="subheading">
                <b>Technologies</b>
            </div>
            <div>
                <ul>
                    {project.tech.map((lang, i) => (
                        <li key={i}>{lang}</li>
                    ))}
                </ul>
            </div>
            <div className="float-right">
                <Button
                    variant="dark"
                    onClick={() => {
                        setModalProps({ show: true, project: project });
                    }}
                >
                    Know more!
                </Button>
            </div>
        </div>
    );
}
