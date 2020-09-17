import React from "react";
import "./Tile.css";
import { Button, Badge } from "react-bootstrap";

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
            <div className="footer-card">
                {project.badges && (
                    <h5 className="float-left">
                        {project.badges.map((val, i) => (
                            <>
                                <Badge variant="info">{val}</Badge>{" "}
                            </>
                        ))}
                    </h5>
                )}

                <Button
                    className="float-right"
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
