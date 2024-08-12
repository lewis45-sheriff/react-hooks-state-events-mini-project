import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import NewTaskForm from "../components/NewTaskForm";
import App from "../components/App";
import { CATEGORIES } from "../data";

test("calls the onTaskFormSubmit callback prop when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn();
  render(
    <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
  );

  fireEvent.change(screen.getByLabelText(/Details:/), {
    target: { value: "Pass the tests" },
  });

  fireEvent.change(screen.getByLabelText(/Category:/), {
    target: { value: "Code" },
  });

  fireEvent.click(screen.getByText(/Add Task/));

  expect(onTaskFormSubmit).toHaveBeenCalledWith(
    expect.objectContaining({
      text: "Pass the tests",
      category: "Code",
    })
  );
});

test("adds a new item to the list when the form is submitted", () => {
  render(<App />);

  const initialTaskCount = screen.getAllByText(/Code/).length;

  fireEvent.change(screen.getByLabelText(/Details:/), {
    target: { value: "Pass the tests" },
  });

  fireEvent.change(screen.getByLabelText(/Category:/), {
    target: { value: "Code" },
  });

  fireEvent.click(screen.getByText(/Add Task/));

  expect(screen.getByText(/Pass the tests/)).toBeInTheDocument();

  expect(screen.getAllByText(/Code/).length).toBe(initialTaskCount + 1);
});
