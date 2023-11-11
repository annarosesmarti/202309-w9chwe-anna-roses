import { screen } from "@testing-library/react";
import mockPeople from "../../mocks/mockData";
import { customRenderStore } from "../../testUtils/customRender";
import PeopleList from "./PeopleList";

describe("Given a PeopleList component", () => {
  describe("When it is rendered and receives a list of people", () => {
    test("Then it should show 'Hermione' in the alternative text of an image", () => {
      const mockPerson = mockPeople[1];
      const expectedText = mockPerson.name;

      customRenderStore(<PeopleList />);

      const text = screen.getByRole("img", {
        name: expectedText,
      });

      expect(text).toBeInTheDocument();
    });
  });
});
