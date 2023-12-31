import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { peopleReducer } from "./features/people/peopleSlice";

export const store = configureStore({
  reducer: {
    peopleState: peopleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
