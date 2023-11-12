import mockPeople from "../../../mocks/mockData";
import { PeopleStructure } from "../../types";
import { loadPeopleActionCreator, peopleReducer } from "./peopleSlice";

describe("Given a peopleReducer reducer", () => {
  describe("When it receives an empty list and a people list", () => {
    test("Then it should return a List of 15 people in it", () => {
      const currentListState: PeopleStructure = {
        people: [],
      };

      const peopleList = mockPeople;

      const newPeopleState = peopleReducer(
        currentListState,
        loadPeopleActionCreator(peopleList),
      );

      expect(newPeopleState.people).toStrictEqual(peopleList);
    });
  });
});
