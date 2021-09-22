import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import Footer from "./Footer";

it("should renders footer text", () => {
  const { getByTestId } = render(
    <MemoryRouter>
      <Footer />
    </MemoryRouter>
  );

  expect(getByTestId("footerText")).toBeInTheDocument();
});
