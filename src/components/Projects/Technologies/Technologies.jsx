import React from "react";
import { Row, Col } from "react-bootstrap";
import "./Technologies.css";

export default function Technologies() {
    return (
        <Row style={{ background: "#e0e0e0", padding: "15px" }}>
            <Col md={3} sm={12} className="d-flex justify-content-center">
                <div className="technologies">
                    <div className="text-center heading">Front End Tech</div>
                    <div className="text-center">
                        <p>React</p>
                        <p>Angular 8+</p>
                        <p>HTML5</p>
                        <p>Sass</p>
                        <p>JavaScript</p>
                        <p>Bootstarp</p>
                        <p>Materialize</p>
                    </div>
                </div>
            </Col>
            <Col md={3} sm={12} className="d-flex justify-content-center">
                <div className="technologies">
                    <div className="heading text-center">Back End Tech</div>
                    <div className="text-center">
                        <p>ExpressJS</p>
                        <p>Flask</p>
                        <p>PHP</p>
                        <p>Java</p>
                        <p>Fireabse</p>
                        <p>Relational Databases</p>
                        <p>NoSQL Databases</p>
                    </div>
                </div>
            </Col>
            <Col md={3} sm={12} className="d-flex justify-content-center">
                <div className="technologies">
                    <div className="heading text-center">
                        Version Control Systems
                    </div>
                    <div className="text-center">
                        <p>Git</p>
                        <p>GitHub</p>
                        <p>GitLab</p>
                    </div>
                </div>
            </Col>
            <Col md={3} sm={12} className="d-flex justify-content-center">
                <div className="technologies">
                    <div className="heading text-center">
                        Other Technologies
                    </div>
                    <div className="text-center">
                        <p>React Native</p>
                        <p>Docker</p>
                        <p>Kubernetes</p>
                        <p>NW.js</p>
                        <p>PWA</p>
                        <p>CircleCI</p>
                    </div>
                </div>
            </Col>
        </Row>
    );
}
