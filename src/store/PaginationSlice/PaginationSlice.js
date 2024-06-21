import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, saveToLocalStorage } from "../../utils/_helpers";

const localPagination = getFromLocalStorage("pagination");

const baseState = {
  page: 1,
  pageSize: 10,
  totalCount: null,
};

const initialState = localPagination ? localPagination : baseState;

const paginate = createSlice({
  name: "paginate",
  initialState,
  reducers: {
    savePageState: (state, action) => {
      console.log(action);
      state.page = action.payload.page;
      state.pageSize = action.payload.pageSize;
      state.totalCount = action.payload.totalCount;
      saveToLocalStorage(action.payload, "pagination");
    },
    resetPageState: (state) => {
      state.page = baseState.page;
      state.pageSize = baseState.pageSize;
      state.totalCount = baseState.totalCount;
      saveToLocalStorage(baseState, "pagination");
    },
  },
});

export const { savePageState, resetPageState } = paginate.actions;

export default paginate.reducer;
