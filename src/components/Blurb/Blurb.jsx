import React from "react";
import "./Blurb.css";
import { Button } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";

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
            <Button size="lg" className="button">
                Know Me More <IoIosArrowDown></IoIosArrowDown>
            </Button>
        </div>
    );
}
