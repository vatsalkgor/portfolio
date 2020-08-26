import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import "./AboutMe.css";
import AboutMePic from "../../assets/images/aboutme.JPG";
import ScrollAnimation from "react-animate-on-scroll";

export default function AboutMe() {
    return (
        <div className="aboutme">
            <Row className="description d-flex align-items-center">
                <Col md={12} sm={12} className="d-flex justify-content-center">
                    <ScrollAnimation
                        animateIn="zoomIn"
                        animateOut="zoomOut"
                        offset={50}
                    >
                        <h5>More about Me!</h5>
                    </ScrollAnimation>
                </Col>

                <Col md={6} sm={12} className="d-flex justify-content-center">
                    <ScrollAnimation
                        animateIn="lightSpeedInLeft"
                        animateOut="lightSpeedOutLeft"
                    >
                        <Card className="aboutme-pic">
                            <Card.Img src={AboutMePic}></Card.Img>
                        </Card>
                    </ScrollAnimation>
                </Col>
                <Col md={6} sm={12}>
                    <ScrollAnimation
                        animateIn="lightSpeedInRight"
                        animateOut="lightSpeedOutRight"
                        offset={50}
                    >
                        <p>
                            I'm a fun loving person with an optimist mindset. I
                            occasionally listen to Indian Classical and
                            Bollywood Music as a tool for refreshment.
                        </p>
                        <p>
                            I like watching movies (who doesn't? LOL!). Though I
                            watch super-hero movies, I'm not a big enthusiast
                            about them. In short Sorry! I don't understand
                            super-hero memes! My favourite genres are Mystery,
                            Thriller and Comedy!
                        </p>
                        <p>
                            If you ask me to choose between F.R.I.E.N.D.S. and
                            TBTT, I would go for (obviously) the later!
                        </p>
                        <p>
                            I'm a Potter fan but not a Potterhead. A few will
                            understand the difference.
                        </p>
                        <p>
                            I love reading books! I'm now improving myself at
                            writing. Initially, I've started writing excerpts
                            from the books I read to remember the essence of the
                            book.
                        </p>
                        <p>
                            In a situation of exploration/exploitation
                            trade-off, I always choose exploration because I
                            believe life is long and I've time to explore
                            everything.
                        </p>
                        <p>That's pretty much it about me!</p>
                    </ScrollAnimation>
                </Col>
            </Row>
        </div>
    );
}
