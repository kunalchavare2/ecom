import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "./AuthSlice/AuthSlice";
import PaginationSlice from "./PaginationSlice/PaginationSlice";
import SearchSlice from "./SearchSlice/SearchSlice";

const store = configureStore({
  reducer: {
    auth: AuthSlice,
    paginationState: PaginationSlice,
    searchState: SearchSlice,
  },
});

export default store;
