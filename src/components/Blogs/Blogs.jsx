import React from "react";
import Navigation from "../Navigation";
import { Container, Row, Col } from "react-bootstrap";
import Countdown from "react-countdown";
import "./Blogs.css";

export default function Blogs() {
    return (
        <div>
            <Navigation transparent={false} />
            <Container fluid>
                <Row className="temp-height d-flex align-items-center">
                    <Col
                        md={12}
                        sm={12}
                        className="d-flex justify-content-center"
                    >
                        <div className="text-center">
                            <div className="heading">Blogs Coming Soon!</div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

const countdownRenderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
        return <div>Here you go!</div>;
    } else {
        return (
            <span>
                {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
                Remaining!
            </span>
        );
    }
};
