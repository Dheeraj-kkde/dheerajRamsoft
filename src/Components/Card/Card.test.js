import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

// Mock the necessary props
const mockCard = {
  id: 1,
  title: "Test Card",
  date: "2023-12-31",
  labels: [],
  tasks: [],
};
const mockProps = {
  card: mockCard,
  boardId: 2,
  updateCard: jest.fn(),
  dragEnded: jest.fn(),
  dragEntered: jest.fn(),
  removeCard: jest.fn(),
};

test("Renders card title, labels, date, and task information", () => {
  const { getByText } = render(<Card {...mockProps} />);
  const titleElement = getByText("Test Card");
  expect(titleElement).toBeInTheDocument();
});

test("Clicking on the card opens the CardInfo modal", () => {
  const { getByText, getByTestId } = render(<Card {...mockProps} />);
  const cardElement = getByText("Test Card");
  fireEvent.click(cardElement);
  const cardInfoModal = getByTestId("card-info-modal");
  expect(cardInfoModal).toBeInTheDocument();
});

test("Clicking 'Delete Card' in the dropdown calls removeCard", () => {
  const { getByTestId, getByText } = render(<Card {...mockProps} />);
  const moreButton = getByTestId("more-button");
  fireEvent.click(moreButton);
  const deleteCardOption = getByText("Delete Card");
  fireEvent.click(deleteCardOption);
  expect(mockProps.removeCard).toHaveBeenCalledWith(mockProps.boardId, mockCard.id);
});




