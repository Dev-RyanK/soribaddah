import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  music: [
    {
      musicId: 10,
      title: "NEXT EPISODE",
      artist: "AKMU",
      image:
        "https://cdnimg.melon.co.kr/cm2/album/images/106/61/658/10661658_20210726111159_500.jpg",
      nickname: "Ryan",
      contents:
        "이번 앨범 [NEXT EPISODE]를 엮어낸 주제는 ‘Beyond Freedom(초월자유)’이다. ‘초월자유’란 단순히 육체적인 안락과 편안함을 넘어 어떠한 환경이나 상태에도 영향받지 않는 내면의 자유를 의미하며, AKMU는 이 주제를 트랙리스트 7곡에서 각기 다른 이야기로 풀어내었다.",
      createdAt: "2022-12-15T21:05:41.217364",
      modifiedAt: "2022-12-15T21:05:41.217364",
    },
  ],
  isLoading: false,
  error: null,
};

export const __getMusic = createAsyncThunk(
  "music/getMusic",
  async (payload, thunkAPI) => {
    try {
      const data = await axios.get("http://localhost:3001/music");
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
  },
});

export const {} = todoSlice.actions;
export default todoSlice.reducer;
