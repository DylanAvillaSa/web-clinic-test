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
      {
        id: 2,
        nama: "VidiLukman",
        gejala: "Demam",
        jadwal: "10:00 - 11:00",
        actions: false,
      },
      {
        id: 3,
        nama: "MandalaA",
        gejala: "Sakit Hati",
        jadwal: "13:00 - 13:30",
        actions: false,
      },
    ],
  },

  reducers: {
    getUser: (state, action) => {
      if (action.type == "user") {
        state.value += action.payload;
      }
    },
  },
});

export const { getUser } = userSlice.actions;

export default userSlice.reducer;
