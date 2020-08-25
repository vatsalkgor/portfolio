import React from "react";
import { Row, Col } from "react-bootstrap";

export default function AboutMe() {
    return (
        <Row
            style={{ padding: "20px" }}
            className="description d-flex align-items-center"
        >
            <Col md={{ span: 6, offset: 3 }} sm={12}>
                <h5>More things about Me!</h5>
                <p>
                    I'm a fun loving person with an optimist mindset. I
                    occasionally listen to Indian Classical and Bollywood Music
                    as a tool for refreshment.
                </p>
                <p>
                    I like watching movies (who doesn't? LOL!). Though I watch
                    super-hero movies, I'm not a big enthusiast about them. In
                    short Sorry! I don't understand super-hero memes! My
                    favourite genres are Mystery, Thriller and Comedy!
                </p>
                <p>
                    If you ask me to choose between F.R.I.E.N.D.S. and TBTT, I
                    would go for (obviously) the later!
                </p>
                <p>
                    I'm a Potter fan but not a Potterhead. A few will understand
                    the difference.
                </p>
                <p>
                    I love reading books! I'm now improving myself at writing.
                    Initially, I've started writing excerpts from the books I
                    read to remember the essence of the book.
                </p>
                <p>
                    In a situation of exploration/exploitation trade-off, I
                    always choose exploration because I believe life is long and
                    I've time to explore everything.
                </p>
                <p>That's pretty much it about me!</p>
            </Col>
        </Row>
    );
}
