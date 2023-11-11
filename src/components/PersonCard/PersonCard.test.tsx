import { screen } from "@testing-library/react";
import mockPeople from "../../mocks/mockData";
import PersonCard from "./PersonCard";
import { customRender } from "../../testUtils/customRender";

describe("Given a PersonCard compomnent", () => {
  describe("When it is rendered", () => {
    test("Then it should show 'Harry' in the alternative text of the image", () => {
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
