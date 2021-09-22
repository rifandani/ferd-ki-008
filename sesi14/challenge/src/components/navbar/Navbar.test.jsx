import { render } from "@testing-library/react";
import Navbar from "./Navbar";

it("should renders navbar title", () => {
  const { getByTestId } = render(<Navbar />);

  expect(getByTestId("navbarTitle")).toBeInTheDocument();
});
