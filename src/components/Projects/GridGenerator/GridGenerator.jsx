import React from "react";
import { Row, Col } from "react-bootstrap";

function chunk(array, size = 1) {
    let arrayChunks = [];
    for (let i = 0; i < array.length; i += size) {
        let arrayChunk = array.slice(i, i + size);
        arrayChunks.push(arrayChunk);
    }
    return arrayChunks;
}
export default function GridGenerator({ cols, children }) {
    const colWidth = 12 / cols;
    const rows = chunk(children, cols);
    return (
        <>
            {rows.map((cols, i) => (
                <Row key={i}>
                    {cols.map((col, j) => (
                        <Col
                            key={j}
                            className="d-flex justify-content-center"
                            sm={12}
                            md={colWidth}
                        >
                            {col}
                        </Col>
                    ))}
                </Row>
            ))}
        </>
    );
}
