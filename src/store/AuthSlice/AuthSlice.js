import { createSlice } from "@reduxjs/toolkit";
import { getFromLocalStorage, saveToLocalStorage } from "../../utils/_helpers";

const localToken = getFromLocalStorage("token");

const isExpiredToken = (date, age) => {
  const prevDate = new Date(date);

  prevDate.setSeconds(prevDate.getSeconds() + age);

  return prevDate < Date.now();
};

const initialState = localToken
  ? { isAuthenticated: !isExpiredToken(localToken.curDate, localToken.maxAge) }
  : {
      isAuthenticated: false,
    };

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state) => {
      state.isAuthenticated = true;

      // to make user authenticated for 15 min
      saveToLocalStorage(
        {
          curDate: Date.now(),
          maxAge: 15 * 60,
        },
        "token"
      );
    },
    isExpired: (state) => {
      const localToken = getFromLocalStorage("token");

      state.isAuthenticated = !isExpiredToken(
        localToken.curDate,
        localToken.maxAge
      );
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.remove("token");
    },
  },
});

export const { login, logout, isExpired } = auth.actions;

export default auth.reducer;
