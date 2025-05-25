import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { BlogType } from "@/types";

const getBlog = createAsyncThunk("blog/getBlog", async () => {
  let backendUrl = import.meta.env.VITE_TEST_BACKEND;
  let response = await fetch(backendUrl + "/blog", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();
  return data;
});

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    value: [] as BlogType[],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlog.fulfilled, (state, action) => {
      state.value = action.payload;
      state.status = "succeeded";
    });
    builder.addCase(getBlog.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getBlog.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export { getBlog };
export default blogSlice.reducer;
