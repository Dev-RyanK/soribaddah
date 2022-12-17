import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { instance, postGetInstance } from "../../shared/instance"
// import apiKeys from "../../shared/apiKeys"

const initialState = {
  post: {
    musicId: 0,
    title: "from slice**NEXT EPISODE",
    artist: "AKMU",
    nickname: "Ryan",
    contents:
      "이번 앨범 [NEXT EPISODE]를 엮어낸 주제는 ‘Beyond Freedom(초월자유)’이다. ‘초월자유’란 단순히 육체적인 안락과 편안함을 넘어 어떠한 환경이나 상태에도 영향받지 않는 내면의 자유를 의미하며, AKMU는 이 주제를 트랙리스트 7곡에서 각기 다른 이야기로 풀어내었다.",
    image:
      "https://cdnimg.melon.co.kr/cm2/album/images/106/61/658/10661658_20210726111159_500.jpg",
    createdAt: "2022-12-15T21:05:41.160353",
    modifiedAt: "2022-12-15T21:05:41.160353",
    commentList: [],
  },
  isLoading: false,
  error: null,
  msg: "",
}

export const __getPost = createAsyncThunk(
  "music/get",
  async (payload, thunkAPI) => {
    try {
      const data = await postGetInstance.get(`/${payload}`, payload)
      return thunkAPI.fulfillWithValue(data.data)
    } catch (error) {
      return thunkAPI.rejectWithValue(error.msg)
    }
  }
)

const postDetailSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    /* getPost: (state, action) => {
      instance.patch(`/music/${action.payload}`)
      state.post = action.payload
    }, */
    updatePost: (state, action) => {
      instance.patch(`/music/${action.payload}`)
      state.post = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      // 네트워크 요청이 시작되면 로딩 상태를 true로 변경
      .addCase(__getPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__getPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.post = action.payload
      })
      .addCase(__getPost.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { getPost, updatePost } = postDetailSlice.actions
export default postDetailSlice.reducer
