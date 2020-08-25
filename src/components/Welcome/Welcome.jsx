import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import AboutPic from "../../assets/images/about_cropped.jpg";
import "./Welcome.css";
import SocialLinks from "../SocialLinks/SocialLinks";

export default function About() {
    return (
        <Row className="about d-flex align-items-center">
            <Col md={5} sm={12} className="d-flex justify-content-center">
                <div className="float-md-right" style={{ margin: "15px" }}>
                    <Card style={{ width: "18rem" }}>
                        <Card.Img variant="top" src={AboutPic} />
                    </Card>
                </div>
            </Col>
            <Col md={6} sm={12}>
                <div className="description">
                    <h5>Welcome to my website!</h5>
                    <p>
                        My name is Vatsal Gor and I'm a software developer. I
                        live in Auckland and belong to India. I like to spend
                        most of my time developing software and web
                        applications. I'm a bookaholic and spend most of my free
                        time reading books of various genres. On long weekends,
                        I like to visit unexplored trails and sometimes like to
                        do adventerous activities as well. Hope you will enjoy
                        your time here :)
                    </p>
                    <div className="float-right">
                        <SocialLinks></SocialLinks>
                    </div>
                </div>
            </Col>
        </Row>
    );
}
