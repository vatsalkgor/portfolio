import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Blurb from "./Blurb/Blurb";

export default function Home() {
    return (
        <div>
            <Container fluid>
                <Row>
                    <Col xs={12} md={12}>
                        <Blurb></Blurb>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
