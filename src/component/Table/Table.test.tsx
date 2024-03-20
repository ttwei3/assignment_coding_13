// Marbella/Table.tests.tsx
import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Table } from "./Table";

describe("Table Component", () => {
  test("renders Table correctly", () => {
    render(<Table>Test content</Table>);
    expect(screen.getByText("Test content")).toBeInTheDocument();
  });

  test("Table should be disabled", () => {
    render(<Table disabled>Disabled Table</Table>);
    expect(screen.getByText("Disabled Table")).toHaveStyle(
      "background-color: darkgrey",
    );
  });
});
