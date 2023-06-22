import React from "react";
import { render, screen } from "@testing-library/react";
import DateDifferenceCalculator from "./DateDifferenceCalculator";

test("renders DateDifferenceCalculator component", () => {
  render(<DateDifferenceCalculator />);
  const calculateButton = screen.getByText("Calculate");
  expect(calculateButton).toBeInTheDocument();
});
