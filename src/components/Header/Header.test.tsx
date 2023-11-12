import { screen } from "@testing-library/react";
import Header from "./Header";
import { customRender } from "../../testUtils/customRender";

describe("Given a Header component", () => {
  describe("When it is rendered and receives the title text 'Hogwarts' and the subtitle '· The social network ·'", () => {
    beforeEach(() => {
      customRender(
        <Header titleText="Hogwarts" subtitleText=" The social network ·" />,
      );
    });

    test("Then it should show the alt text 'Hogwarts logo'"),
      () => {
        const expectedAltText = "Hogwarts logo";

        const altText = screen.getByAltText(expectedAltText);

        expect(altText).toBeInTheDocument();
      };

    test("Then it should show the heading 'Hogwarts'", () => {
      const expectedText = "Hogwarts";

      const headingText = screen.getByRole("heading", {
        name: expectedText,
      });

      expect(headingText).toBeInTheDocument();
    });
  });
});
