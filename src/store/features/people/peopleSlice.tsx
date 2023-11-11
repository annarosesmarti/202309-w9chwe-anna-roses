import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { PeopleStructure, PersonStructure } from "../../types";

const initialPeopleState: PeopleStructure = {
  people: [],
};

const peopleSlice = createSlice({
  name: "people",
  initialState: initialPeopleState,
  reducers: {
    loadPeople: (
      currentState,
      action: PayloadAction<PersonStructure[]>,
    ): PeopleStructure => {
      return {
        ...currentState,
        people: action.payload,
      };
    },
  },
});

export const { loadPeople: loadPeopleActionCreator } = peopleSlice.actions;

export const peopleReducer = peopleSlice.reducer;
