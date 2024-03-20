import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { HeroImage } from "./HeroImage";

describe("HeroImage Component", () => {
  test("is visible", () => {
    render(<HeroImage imageUrl="https://via.placeholder.com/500" />);
    expect(screen.getByTestId("hero-image")).toBeInTheDocument();
  });

  test("changes opacity when disabled", () => {
    const { getByTestId } = render(
      <HeroImage imageUrl="https://via.placeholder.com/500" disabled />,
    );
    expect(getByTestId("hero-image")).toHaveStyle("opacity: 0.5");
  });
});
