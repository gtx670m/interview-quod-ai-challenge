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
    count: 0,
  },
  reducers: {
    setHighlightIssue: (state, action) => {
      const { issue = {}, isActive = false } = action.payload;
      if (isActive) {
        state.highlightIssue = {};
      } else {
        state.highlightIssue = issue;
      }
    },
    addToRecentIssue: (state, action) => {
      const { issue = {}, isActive = false } = action.payload;
      if (!isActive) {
        if (state.recentIssue.length > 4) {
          state.recentIssue.pop();
          state.recentIssue.unshift(issue);
        } else {
          state.recentIssue.unshift(issue);
        }
      }
      state.count = state.recentIssue.length;
    }
  },
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

export const { setHighlightIssue, addToRecentIssue } = listSlice.actions;

export default listSlice.reducer;
