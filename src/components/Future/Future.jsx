import React from "react";
import { Row, Col, Button } from "react-bootstrap";

export default function Future() {
    return (
        <Row className="description d-flex align-items-center">
            <Col md={{ span: 6, offset: 3 }} sm={12}>
                <h5>Future of this website</h5>
                <p>
                    I've made this website to make myself available on the
                    social media!
                </p>
                <p>
                    Now, you would say, what's wrong with Facebook, Instagram
                    and other platforms? Well, as a matter of fact, I don't
                    trust these companies with my private data. And I'm alomst
                    inactive on these sites.
                </p>
                <p>
                    So I'm making this website to be able to socially express
                    myself with my own code which I obviously trust!
                </p>
                <p>
                    As I said, I'm improving myself at writing, I'll be updating
                    blogs on weekly or fortnightly basis. I will also be adding
                    any exciting project that I'm working on and will share some
                    informational insights with my readers.
                </p>
                <div className="text-center">
                    <Button variant="dark">Go to Blogs</Button>
                </div>
            </Col>
        </Row>
    );
}
