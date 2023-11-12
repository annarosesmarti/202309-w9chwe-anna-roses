import { screen } from "@testing-library/react";
import PeopleList from "./PeopleList";
import { customRenderWithProviders } from "../../testUtils/customRender";
import { mockPeople } from "../../mocks/mockData";

describe("Given a PeopleList component", () => {
  describe("When it is rendered and receives a list of two people", () => {
    test("Then it should create two images in a list of two people", () => {
      const mockList = mockPeople;
      const expectedNumberOfItems = 2;

      customRenderWithProviders(<PeopleList />, mockList);
      const list = screen.getAllByRole("img").length;

      expect(list).toBe(expectedNumberOfItems);
    });
  });
});
