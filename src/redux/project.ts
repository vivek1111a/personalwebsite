import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import ProjectType from "@/types/projecttype";

const getProjects = createAsyncThunk("projects/getProjects", async () => {
  let backendUrl = import.meta.env.VITE_TEST_BACKEND;
  let response = await fetch(backendUrl + "/project", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  let data = await response.json();
  return data;
});

const projectSlice = createSlice({
  name: "projects",
  initialState: {
    value: [] as ProjectType[],
    status: "idle",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProjects.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getProjects.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.value = action.payload;
    });
    builder.addCase(getProjects.rejected, (state) => {
      state.status = "failed";
    });
  },
});

export { getProjects };
export default projectSlice.reducer;
