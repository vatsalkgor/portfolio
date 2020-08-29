import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders blurb", () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Indian By Heart, Global By spirit./i);
    expect(linkElement).toBeInTheDocument();
});
