import { renderHook } from "@testing-library/react";
import { mockAllPeople } from "../mocks/mockData";
import usePeopleApi from "./usePeopleApi";

describe("Given a usePeopleApi custom hook", () => {
  describe("When it axies the information of fifteen people with getPeople function", () => {
    test("Then it should return a list of fifteen people", async () => {
      const expectedPeople = mockAllPeople;

      const {
        result: {
          current: { getPeople },
        },
      } = renderHook(() => usePeopleApi());
      const people = await getPeople();

      expect(people).toStrictEqual(expectedPeople);
    });
  });
});
