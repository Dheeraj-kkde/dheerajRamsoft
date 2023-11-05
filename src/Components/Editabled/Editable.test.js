import React from "react";
import { render} from "@testing-library/react";
import Editable from "./Editable";

describe("Editable Component", () => {
  it("renders in display mode with default text", () => {
    const { getByText } = render(<Editable text="Default Text" />);
    const displayElement = getByText("Default Text");
    expect(displayElement).toBeInTheDocument();
  });  
});
