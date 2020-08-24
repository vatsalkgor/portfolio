import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Typist from "react-typist";
import "bootstrap/dist/css/bootstrap.min.css";
import Blurb from "./Blurb/Blurb";

export default function Home() {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={8} md={6}>
                        <Blurb></Blurb>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
