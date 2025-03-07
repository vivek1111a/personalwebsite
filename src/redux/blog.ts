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
  console.log(data);
  return data;
});

export const blogSlice = createSlice({
  name: "blog",
  initialState: {
    value: [] as BlogType[],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBlog.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  },
});

export { getBlog };
export default blogSlice.reducer;
