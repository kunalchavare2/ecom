import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, saveToLocalStorage } from "../../utils/_helpers";

const localSearch = getFromLocalStorage("search");

console.log(localSearch);

const search = { value: "" };

const initialState = localSearch ? localSearch : search;

const searchState = createSlice({
  name: "search",
  initialState,
  reducers: {
    saveSearchState: (state, action) => {
      state.value = action.payload;
      saveToLocalStorage({ value: action.payload }, "search");
    },
  },
});

export const { saveSearchState } = searchState.actions;

export default searchState.reducer;
