import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  music: [{}],
  isLoading: false,
  error: null,
};

export const __getMusic = createAsyncThunk(
  "music/getMusic",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get(`/${payload}`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const __addMusic = createAsyncThunk(
  "music/__addmusic",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.post(`/AddList`, payload);
      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const todoSlice = createSlice({
  name: "music",
  initialState,
  reducers: {},
  extraReducers: {
    [__getMusic.pending]: (state) => {
      state.isLoading = true;
    },
    [__getMusic.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.music = action.payload;
    },
    [__getMusic.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    [__addMusic.pending]: (state) => {
      state.isLoading = true;
    },
    [__addMusic.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.music = action.payload;
    },
    [__addMusic.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { addMusic } = todoSlice.actions;
export default todoSlice.reducer;
