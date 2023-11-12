import { screen } from "@testing-library/react";
import PersonCard from "./PersonCard";
import { customRender } from "../../testUtils/customRender";
import mockPeople from "../../mocks/mockData";

describe("Given a PersonCard compomnent", () => {
  describe("When it is rendered and receives a person and a key number 0", () => {
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
