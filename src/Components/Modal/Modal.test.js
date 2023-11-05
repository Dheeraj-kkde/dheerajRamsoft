import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Modal from "./Modal";

const mockProps = {
  onClose: jest.fn(),
};

test("Renders children inside the modal", () => {
  const { getByText } = render(
    <Modal {...mockProps}>
      <p>Modal Content</p>
    </Modal>
  );

  const modalContent = getByText("Modal Content");
  expect(modalContent).toBeInTheDocument();
});

test("Clicking inside the modal does not trigger onClose", () => {
  const { getByText } = render(
    <Modal {...mockProps}>
      <p>Modal Content</p>
    </Modal>
  );

  const modalContent = getByText("Modal Content");
  fireEvent.click(modalContent);

  expect(mockProps.onClose).not.toHaveBeenCalled();
});

test("Clicking outside the modal calls onClose", () => {
  const { container } = render(
    <Modal {...mockProps}>
      <p>Modal Content</p>
    </Modal>
  );

  const modal = container.querySelector(".modal");
  fireEvent.click(modal);

  expect(mockProps.onClose).toHaveBeenCalled();
});

test("Clicking inside the modal_content does not call onClose", () => {
  const { container } = render(
    <Modal {...mockProps}>
      <p>Modal Content</p>
    </Modal>
  );

  const modalContent = container.querySelector(".modal_content");
  fireEvent.click(modalContent);

  expect(mockProps.onClose).not.toHaveBeenCalled();
});
