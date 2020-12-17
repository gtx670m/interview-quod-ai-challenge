import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import listApi from "../api/listApi";

export const fetch = createAsyncThunk(
  "list/fetch",
  async (params, thunkAPI) => {
    const listIssue = await listApi.fetch(params);
    return listIssue;
  }
);

export const listSlice = createSlice({
  name: "list",
  initialState: {
    listIssue: [],
    recentIssue: [],
    highlightIssue: {},
  },
  reducers: {},
  extraReducers: {
    [fetch.pending]: (state) => {
      state.loading = true;
    },
    [fetch.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [fetch.fulfilled]: (state, action) => {
      state.loading = false;
      state.listIssue = action.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount } = listSlice.actions;

export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(incrementByAmount(amount));
  }, 1000);
};

export const selectCount = (state) => state.list.recent;

export default listSlice.reducer;
