import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: { status: "idle", user: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.status = "idle";
      });
  },
});
export const fetchUser = createAsyncThunk("login/loginAuth", async (user) => {
  const res = await fetch("/api/authLogin", {
    method: "POST",
    body: JSON.stringify(user),
  });
  const data = await res.json();
  return data;
});
export default loginSlice.reducer;
