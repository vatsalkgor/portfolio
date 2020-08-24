import React from "react";
import { Navbar, Nav } from "react-bootstrap";

export default function Navigation({ children }) {
    return (
        <Navbar
            collapseOnSelect
            expand="lg"
            style={{ background: "transparent" }}
        >
            <Navbar.Brand style={{ color: "rgb(38, 51, 78)" }} href="#home">
                Vatsal Gor
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#pricing">Pricing</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}
