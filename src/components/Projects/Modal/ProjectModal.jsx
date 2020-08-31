import React from "react";
import { Modal, Card } from "react-bootstrap";
import { IoLogoGithub } from "react-icons/io";
import GridGenerator from "../GridGenerator/GridGenerator";

export default function ProjectModal({ show, handleClose, project }) {
    console.log(project);
    return (
        <Modal show={show} onHide={handleClose} centered size="lg" scrollable>
            <Modal.Header closeButton>
                <Modal.Title>{project.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="long-description">
                    <div className="subheading">
                        <b>Overview</b>
                    </div>
                    <div>
                        {project.long_description.overview.map((entry, i) => (
                            <p key={i}>{entry}</p>
                        ))}
                    </div>
                </div>
                <div className="long-description">
                    <div className="subheading">
                        <b>Requirements</b>
                    </div>
                    <div>
                        {project.long_description.requirements.map(
                            (entry, i) => (
                                <p key={i}>{entry}</p>
                            )
                        )}
                    </div>
                </div>
                <div className="long-description">
                    <div className="subheading">
                        <b>Solution</b>
                    </div>
                    <div>
                        {project.long_description.solution.map((entry, i) => (
                            <p key={i}>{entry}</p>
                        ))}
                    </div>
                </div>
                <div className="long-description">
                    <div className="subheading">
                        <b>Result</b>
                    </div>
                    <div>
                        {project.long_description.result.map((entry, i) => (
                            <p key={i}>{entry}</p>
                        ))}
                    </div>
                </div>
                <div className="subheading">
                    <b>Technologies</b>
                </div>
                <div>
                    <ul>
                        {project.tech.map((tech, i) => (
                            <li key={i}>{tech}</li>
                        ))}
                    </ul>
                </div>
                <div className="subheading">
                    <b>Timeline</b>
                </div>
                <div>
                    <b>Duration: </b>
                    {project.timeline.duration} Month(s)
                    <span>&nbsp;&nbsp;</span>
                    <b>Months: </b>
                    {project.timeline.months}
                </div>
                <div>
                    {project.images && (
                        <>
                            <div className="subheading">
                                <b>Work sample</b>
                            </div>
                            <GridGenerator cols={project.images.cols}>
                                {project.images.links.map((link, i) => (
                                    <Card style={{ margin: "16px" }} key={i}>
                                        <Card.Img src={link} width="100%" />
                                    </Card>
                                ))}
                            </GridGenerator>
                        </>
                    )}
                </div>
            </Modal.Body>
            {project.link && (
                <Modal.Footer style={{ padding: "0px" }}>
                    <a
                        className="float-right"
                        target="_blank"
                        href={project.link}
                        rel="noopener noreferrer"
                    >
                        <IoLogoGithub size="2em"></IoLogoGithub>
                    </a>
                </Modal.Footer>
            )}
        </Modal>
    );
}
