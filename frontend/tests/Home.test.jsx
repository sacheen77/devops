import { render, screen } from "@testing-library/react";
import { describe, test, expect } from "vitest";
import Home from "../src/pages/Home";

describe("Home Page", () => {
  test("renders movie title heading", () => {
    render(<Home />);
    expect(screen.getByText("Movie Collection")).toBeInTheDocument();
  });
});
