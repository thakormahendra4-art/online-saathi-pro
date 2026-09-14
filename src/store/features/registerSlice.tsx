import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { RegisterState } from "./featuresTypes";

const initialState: RegisterState = {
  loading: false,
  success: false,
  error: null,
};

const registerSlice = createSlice({
  name: "register",

  initialState,

  reducers: {
    registerStart: (state) => {
      state.loading = true;
      state.success = false;
      state.error = null;
    },

    registerSuccess: (state) => {
      state.loading = false;
      state.success = true;
      state.error = null;
    },

    registerFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.success = false;
      state.error = action.payload;
    },

    resetRegister: (state) => {
      state.loading = false;
      state.success = false;
      state.error = null;
    },
  },
});

export const {
  registerStart,
  registerSuccess,
  registerFailure,
  resetRegister,
} = registerSlice.actions;

export default registerSlice.reducer;