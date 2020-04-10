import React from "react";
import { render, getByText, fireEvent } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
  render(<App />);
});

test("Switch theme button works", ()=> {
 
  const {getByText} = render(<App />)
    const theme = getByText(/switch/i)
    fireEvent.click(theme);


})