import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUserAsync = createAsyncThunk(
  "auth/loginUserAsync",
  async (loginData) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/auth/login`,
      loginData
    );
    if (data.token) {
      localStorage.setItem("token", JSON.stringify(data.token));
    }
    return data;
  }
);

export const registerUserAsync = createAsyncThunk(
  "auth/registerUserAsync",
  async (registerData) => {
    const { data } = await axios.post(
      `${process.env.REACT_APP_API_BASE_URL}/auth/register`,
      registerData
    );
    if (data.token) {
      localStorage.setItem("token", JSON.stringify(data.token));
    }
    return data;
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [loginUserAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [loginUserAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [loginUserAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    [registerUserAsync.pending]: (state, action) => {
      state.isLoading = true;
    },
    [registerUserAsync.fulfilled]: (state, action) => {
      state.isLoading = false;
    },
    [registerUserAsync.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default authSlice.reducer;
