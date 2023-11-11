import { screen } from "@testing-library/react";
import mockPeople from "../../mocks/mockData";
import customRender from "../../testUtils/customRender";
import PersonCard from "./PersonCard";

describe("Given a PersonCard compomnent", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Origin:' text in a list of items", () => {
      const mockPerson = mockPeople[0];
      const expectedText = mockPerson.name;

      customRender(<PersonCard key={0} person={mockPerson} />);

      const text = screen.getByRole("img", {
        name: expectedText,
      });

      expect(text).toBeInTheDocument();
    });
  });
});
