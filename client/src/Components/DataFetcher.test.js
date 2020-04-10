import React from "react";
import { render } from "@testing-library/react";
import DataFetcher from "./DataFetcher";

test("renders App without crashing", () => {
  render(<DataFetcher />);
});
