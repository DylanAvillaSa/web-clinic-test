import { createSlice } from "@reduxjs/toolkit";

const biodataSlice = createSlice({
  name: "biodata",
  initialState: {
    data: [],
  },

  reducers: {
    getUserBiodata: (state, action) => {
      state.data.push(action.payload);
    },
  },
});

export const { getUserBiodata } = biodataSlice.actions;
export default biodataSlice.reducer;
