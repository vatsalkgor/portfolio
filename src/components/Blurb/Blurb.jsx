import React from "react";
import "./Blurb.css";
import { Button } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { HashLink as Link } from "react-router-hash-link";

export default function Blurb() {
    return (
        <div className="blurb">
            <p>
                <span className="heading">
                    Indian by Heart, Global by Spirit.
                </span>
                <br />
                <span className="subheading">
                    Software Engineer | Bibliophile | Adventurer
                </span>
            </p>
            <Link smooth to="/#about">
                <Button size="lg" variant="light" className="button">
                    Know Me More <IoIosArrowDown></IoIosArrowDown>
                </Button>
            </Link>
        </div>
    );
}
