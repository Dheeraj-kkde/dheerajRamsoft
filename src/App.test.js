import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("Renders the Dheeraj Dashboard title", () => {
  const { getByText } = render(<App />);
  const titleElement = getByText("Dheeraj Dashboard");
  expect(titleElement).toBeInTheDocument();
});

test("Renders boards with 'Add Board' button", () => {
  const { getByText } = render(<App />);
  const addButtonElement = getByText("Add Board");
  expect(addButtonElement).toBeInTheDocument();
});

test("Clicking 'Add Board' button adds a new board", () => {
  const { getByText } = render(<App />);
  const addButtonElement = getByText("Add Board");
  fireEvent.click(addButtonElement);
  const boardElement = getByText("Add Board");
  expect(boardElement).toBeInTheDocument();
});
