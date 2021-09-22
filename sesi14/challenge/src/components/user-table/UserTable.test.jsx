import { screen, render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import UserTable from "./UserTable";

it("should renders user-table comp", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <UserTable />
    </MemoryRouter>
  );

  expect(getByTestId("userTable")).toBeInTheDocument();
});

it("should renders user data properly", async () => {
  render(
    <MemoryRouter>
      <UserTable />
    </MemoryRouter>
  );

  const user = await waitFor(
    () => {
      return screen.findByText("Leanne Graham");
    },
    { timeout: 5000 }
  );

  expect(user).toBeInTheDocument();
});
