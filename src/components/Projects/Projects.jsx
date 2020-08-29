import React, { useEffect } from "react";
import Navigation from "../Navigation";
import { Row, Col, Container } from "react-bootstrap";
import Technologies from "./Technologies/Technologies";
import GridGenerator from "./GridGenerator/GridGenerator";
import Tile from "./Tile/Tile";
import { getProjects } from "./Firebase";
import { useState } from "react";
import ProjectModal from "./Modal/ProjectModal";

export default function Projects() {
    const [projects, setProjects] = useState();
    const [modalProps, setModalProps] = useState({
        show: false,
        project: null,
    });
    const handleClose = () => setModalProps({ show: false });

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => {
        async function getProjectsData() {
            const projects = await getProjects();
            setProjects(projects);
        }
        getProjectsData();
        return () => {
            // cleanup;
        };
    }, []);

    return (
        <div>
            <Navigation transparent={false} />
            <Container fluid>
                <Row>
                    <Col style={{ paddingTop: "3em" }} md={12} sm={12}>
                        <div className="text-center">
                            <div className="heading">
                                Programming Adventures
                            </div>
                        </div>
                    </Col>
                    <Col
                        style={{ padding: "3em" }}
                        md={{ span: 6, offset: 3 }}
                        sm={12}
                    >
                        <div className="text-justify">
                            I like the satisfaction of creating something from
                            scratch, giving birth to a new Application with a
                            purpose that slowly acquires it's soul. The Back-End
                            Development excites me while the Front-End and
                            Design aspects of an Application brings out all the
                            well-thought work that has been put into it. I
                            continuously learn new things, new Libraries, new
                            Languages and new Frameworks through Documentations
                            or Articles. I stay up-to-date with the
                            quickly-evolving area of Software Engineering. Some
                            of the topics that I have studied on are Restfull
                            APIs, Single Page Cross Platform Desktop &amp;
                            Mobile Applications Databases ( MySQL, MongoDB,
                            Postgres, Firestore), different languages (NodeJS,
                            React, Angular, PHP, Java, TypeScript, Python and
                            Flask) while also planning to look into more aspects
                            (AI, Python, Django, PWAs).
                        </div>
                    </Col>
                </Row>
                <Technologies />
                <div style={{ padding: "15px" }}>
                    <div className="text-center heading">Projects</div>
                    {projects && (
                        <GridGenerator cols={3}>
                            {projects.map((project, i) => (
                                <Tile
                                    setModalProps={setModalProps}
                                    key={i}
                                    project={project}
                                />
                            ))}
                        </GridGenerator>
                    )}
                </div>
                {modalProps.show && modalProps.project && (
                    <ProjectModal
                        show={modalProps.show}
                        project={modalProps.project}
                        handleClose={handleClose}
                    />
                )}
            </Container>
        </div>
    );
}
