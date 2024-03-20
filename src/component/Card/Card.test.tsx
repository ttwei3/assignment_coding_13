// Marbella/Card.tests.tsx
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Card } from "./Card";

describe("Card Component", () => {
  test("is visible", () => {
    render(<Card>This is a visible card</Card>);
    expect(screen.getByText("This is a visible card")).toBeInTheDocument();
  });

  test("changes background color when disabled", () => {
    render(
      <Card disabled backgroundColor="#DDDDDD">
        Disabled Card
      </Card>,
    );
    const card = screen.getByText("Disabled Card");
    expect(card).toHaveStyle("opacity: 0.5");
    expect(card).toHaveStyle("background-color: #DDDDDD");
  });
});
