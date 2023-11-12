import { screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { customRenderWithProviders } from "../../testUtils/customRender";
import mockPeople from "../../mocks/mockData";

describe("Given a HomePage component", () => {
  describe("When it is rendered and receives a list of two people", () => {
    test("Then it should show the title 'Create your network'", () => {
      const expectedTitle = "Create your network";
      const mockData = mockPeople;

      customRenderWithProviders(<HomePage />, mockData);
      const title = screen.getByRole("heading", {
        name: expectedTitle,
      });

      expect(title).toBeInTheDocument();
    });
  });
});
