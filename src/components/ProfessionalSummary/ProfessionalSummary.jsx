import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import "./ProfessionalSummary.css";

export default function ProfessionalSummary() {
    return (
        <div className="professional-summary">
            <Row className="d-flex align-items-center">
                <Col md={{ span: 6, offset: 3 }} sm={12}>
                    <h5>Professional Summary</h5>
                    <ul>
                        <li>
                            Above 1 year experience in building websites, mobile
                            applications and desktop applications using various
                            programming tools.
                        </li>
                        <li>
                            Fullstack web developer working with NodeJS, React,
                            Angular and Docker.
                        </li>
                        <li>
                            Keen interest in latest advancements in Artificial
                            Intelligence, Machine Learning and Computer Vision.
                        </li>
                        <li>
                            Flexible, adaptable to any new environment with a
                            strong desire to keep pace with latest technologies
                            using and technical skills.
                        </li>
                        <li>
                            Self-motivated, quick learner and having experience
                            in working with Agile Team.
                        </li>
                        <li>
                            Strictly follow SDLC methods and experience in
                            working with diverse personalities to achieve the
                            desired goal.
                        </li>
                        <li>
                            Experience in handling customer and complaints, root
                            cause analysis and quickly and decisively take
                            preventive and corrective actions.
                        </li>
                    </ul>
                    <div className="text-center">
                        <Button variant="primary">
                            Explore My Projects &nbsp;&nbsp;
                            <FaSearch />
                        </Button>
                    </div>
                </Col>
            </Row>
        </div>
    );
}
