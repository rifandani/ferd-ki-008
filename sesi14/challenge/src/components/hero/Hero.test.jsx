import { render, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Users from "../../pages/Users";
import Hero from "./Hero";

it("should renders hero title", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  );

  expect(getByTestId("heroTitle")).toBeInTheDocument();
});

it("should renders hero subtitle", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  );

  expect(getByTestId("heroSubtitle")).toBeInTheDocument();
});

it("should renders hero button", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  );

  expect(getByTestId("heroButton")).toBeInTheDocument();
});

test("button click should renders /users page", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Hero />
    </MemoryRouter>
  );

  const { getByTestId: getByTestIdUsers } = render(
    <MemoryRouter>
      <Users />
    </MemoryRouter>
  );

  fireEvent.click(getByTestId("heroButton"));

  expect(getByTestIdUsers("usersButton")).toBeInTheDocument();
});
