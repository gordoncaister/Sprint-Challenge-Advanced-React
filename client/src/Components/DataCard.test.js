import React from "react";
import { render } from "@testing-library/react";
import {DataCard} from "./DataCard";

test("renders App without crashing", () => {
  render(<DataCard data={{name:"sarah", country:"japan"}} />);
});