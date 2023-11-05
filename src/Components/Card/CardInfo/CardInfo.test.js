import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CardInfo from "./CardInfo";


const mockCard = {
  id: 1,
  title: "Test Card",
  desc: "Test Description",
  date: "2023-12-31",
  labels: [],
  tasks: [],
};
const mockProps = {
  card: mockCard,
  boardId: 2,
  onClose: jest.fn(),
  updateCard: jest.fn(),
};

test("Renders card title, description, and date", () => {
  const { getByText } = render(<CardInfo {...mockProps} />);
  const titleElement = getByText("Title");
  const descriptionElement = getByText("Description");
  const dateElement = getByText("Date");
  expect(titleElement).toBeInTheDocument();
  expect(descriptionElement).toBeInTheDocument();
  expect(dateElement).toBeInTheDocument();
});

test("Renders labels, task checkboxes", () => {
  const { getByText } = render(<CardInfo {...mockProps} />);
  const labelsElement = getByText("Labels");
  const tasksElement = getByText("Tasks");
  expect(labelsElement).toBeInTheDocument();
  expect(tasksElement).toBeInTheDocument();
});

