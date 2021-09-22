import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Users from "./Users";
import Home from "./Home";

it("should renders users page", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Users />
    </MemoryRouter>
  );

  expect(getByTestId("users")).toBeInTheDocument();
});

test("button click should renders home page", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Users />
    </MemoryRouter>
  );

  const { getByTestId: getByTestIdHome } = render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );

  fireEvent.click(getByTestId("usersButton"));

  expect(getByTestIdHome("home")).toBeInTheDocument();
});
