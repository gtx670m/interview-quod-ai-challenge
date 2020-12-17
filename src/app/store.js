import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers } from "redux";
import list from "./listSlice";

const rootReducer = combineReducers({
  list,
});

const store = configureStore({
  reducer: rootReducer,
});

export const useAppDispatch = () => useDispatch();
export default store;
