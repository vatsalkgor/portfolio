import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation({ children, transparent }) {
    if (transparent) {
        return (
            <Navbar
                collapseOnSelect
                expand="lg"
                style={{ background: "transparent" }}
            >
                <Navbar.Brand style={{ color: "rgb(38, 51, 78)" }} href="/">
                    Vatsal Gor
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    } else {
        return (
            <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
                <Navbar.Brand href="/">Vatsal Gor</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/projects">Projects</Nav.Link>
                        <Nav.Link href="/blogs">Blogs</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
