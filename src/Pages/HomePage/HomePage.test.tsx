import { screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { customRenderStore } from "../../testUtils/customRender";

describe("Given a HomePage component", () => {
  describe("When it is rendered", () => {
    test("Then it should show the title 'Create your network'", () => {
      const expectedTitle = "Create your network";

      customRenderStore(<HomePage />);

      const title = screen.getByRole("heading", {
        hidden: true,
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
