import React from "react";
import { Navbar } from "react-bootstrap";
import "./Footer.css";

export default function Footer() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <div className="text-center footer">
                &copy; {new Date().getFullYear()} Vatsal Gor
            </div>
        </Navbar>
    );
}
