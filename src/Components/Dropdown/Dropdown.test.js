import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Dropdown from "./Dropdown";

describe("Dropdown Component", () => {
  it("renders the children inside the dropdown", () => {
    const { getByText } = render(
      <Dropdown>
        <p>Item 1</p>
        <p>Item 2</p>
      </Dropdown>
    );

    expect(getByText("Item 1")).toBeInTheDocument();
    expect(getByText("Item 2")).toBeInTheDocument();
  });

  it("closes the dropdown on outside click", () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Dropdown onClose={onClose}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Dropdown>
    );

    const outsideElement = document.querySelector("body"); // Simulating a click outside the dropdown
    fireEvent.click(outsideElement);

    expect(onClose).toHaveBeenCalledTimes(1); // Ensure onClose is called
  });

  it("does not close the dropdown on inside click", () => {
    const onClose = jest.fn();
    const { getByText } = render(
      <Dropdown onClose={onClose}>
        <p>Item 1</p>
        <p>Item 2</p>
      </Dropdown>
    );

    const item1 = getByText("Item 1");
    fireEvent.click(item1);

    expect(onClose).not.toHaveBeenCalled(); // Ensure onClose is not called
  });
});
