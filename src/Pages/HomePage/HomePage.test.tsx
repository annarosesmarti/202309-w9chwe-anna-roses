import { screen } from "@testing-library/react";
import customRender from "../../testUtils/customRender";
import HomePage from "./HomePage";

describe("Given a HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Create your network'", () => {
      const expectedTitle = "Create your network";

      customRender(<HomePage />);

      const title = screen.getByRole("heading", {
        hidden: true,
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
