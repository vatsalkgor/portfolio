import React from "react";
import { CssBaseline, AppBar, Toolbar } from "@material-ui/core";

export default function Appbar({ transparent, children }) {
    if (transparent) {
        return (
            <div>
                <CssBaseline />
                <AppBar
                    position="fixed"
                    style={{ background: "transparent" }}
                    elevation={0}
                >
                    <Toolbar className="center">{children}</Toolbar>
                    <main>alsdfkjalk</main>
                </AppBar>
            </div>
        );
    } else {
        return (
            <div>
                <CssBaseline />
                <AppBar position="fixed">
                    <Toolbar className="center">{children}</Toolbar>
                </AppBar>
            </div>
        );
    }
}
