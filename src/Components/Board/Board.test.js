import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Board from "./Board";

const mockBoard = {
  title: "Test Board",
  cards: [
    { id: 1, title: "Card 1" },
    { id: 2, title: "Card 2" },
  ],
};
const mockProps = {
  board: mockBoard,
  removeBoard: jest.fn(),
  addCard: jest.fn(),
};

test("Renders board title and card count", () => {
  const { getByText } = render(<Board {...mockProps} />);
  const titleElement = getByText("Test Board");
  const cardCountElement = getByText("2");
  expect(titleElement).toBeInTheDocument();
  expect(cardCountElement).toBeInTheDocument();
});

test("Renders cards in the board", () => {
  const { getByText } = render(<Board {...mockProps} />);
  const card1 = getByText("Card 1");
  const card2 = getByText("Card 2");
  expect(card1).toBeInTheDocument();
  expect(card2).toBeInTheDocument();
});

test("Clicking on 'More' button opens the dropdown", () => {
  const { getByTestId, getByText } = render(<Board {...mockProps} />);
  const moreButton = getByTestId("more-button");
  fireEvent.click(moreButton);
  const deleteButton = getByText("Delete Board");
  expect(deleteButton).toBeInTheDocument();
});

test("Clicking 'Delete Board' in dropdown calls removeBoard", () => {
  const { getByTestId, getByText } = render(<Board {...mockProps} />);
  const moreButton = getByTestId("more-button");
  fireEvent.click(moreButton);
  const deleteButton = getByText("Delete Board");
  fireEvent.click(deleteButton);
  expect(mockProps.removeBoard).toHaveBeenCalled();
});
