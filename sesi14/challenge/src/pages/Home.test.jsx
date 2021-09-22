import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Home from "./Home";

it("should renders home page", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  expect(getByTestId("home")).toBeInTheDocument();
});
