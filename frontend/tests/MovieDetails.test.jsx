import { render, screen } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import axios from "axios";
import MovieDetails from "../src/pages/MovieDetails";

vi.mock("axios");

test("renders movie details", async () => {
  axios.get.mockResolvedValue({
    data: {
      title: "Test Movie",
      description: "Sample Description",
    },
  });

  render(
    <MemoryRouter initialEntries={["/movies/1"]}>
      <Routes>
        <Route path="/movies/:id" element={<MovieDetails />} />
      </Routes>
    </MemoryRouter>
  );

  expect(screen.getByText("Loading...")).toBeInTheDocument();

  const movieTitle = await screen.findByText("Test Movie");
  expect(movieTitle).toBeInTheDocument();
});
