import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: [
      {
        id: 1,
        nama: "DylanAvilla",
        gejala: "Sakit Gigi",
        jadwal: "08:00 - 09:00",
        actions: false,
      },
    ],
  },

  reducers: {
    getUser: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
