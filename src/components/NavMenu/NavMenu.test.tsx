import userEvent from "@testing-library/user-event";
import { screen } from "@testing-library/react";
import App from "../App/App";
import { customRenderWithProviders } from "../../testUtils/customRender";
import mockPeople from "../../mocks/mockData";

describe("Given a NavMenu component", () => {
  describe("When it receives a click on the Home link and a list of two people", () => {
    test("Then it should show a title 'Create your network' on a heading", () => {
      const mockData = mockPeople;
      const homePageTitle = "Create your network";
      const listItem = "List";
      const user = userEvent.setup();

      customRenderWithProviders(<App />, mockData);
      const link = screen.getByText(listItem);
      const title = screen.getByRole("heading", { name: homePageTitle });
      user.click(link);

      expect(title).toBeInTheDocument();
      expect(link).toBeInTheDocument();
    });
  });
});
