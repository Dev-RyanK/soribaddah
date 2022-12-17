import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { commentGetInstance, instance } from "../../shared/instance"

const initialState = {
  comment: {
    musicId: 1,
    title: "노래 제목 1",
    singer: "가수 1",
    image:
      "https://image.bugsm.co.kr/album/images/original/203171/20317156.jpg?version=undefined",
    content: "게시글 내용 1",
  },
  isLoading: false,
  error: null,
  msg: "",
}

// thunk
export const __getComment = createAsyncThunk(
  "comment/get",
  async (payload, thunkAPI) => {
    try {
      const data = await commentGetInstance.get(`/${payload}`, payload)
      return thunkAPI.fulfillWithValue(data.data)
    } catch (err) {
      return thunkAPI.rejectWithValue(err.msg)
    }
  }
)

const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    updateComment: (state, action) => {
      // ????
      commentGetInstance.patch(`/${action.payload}/${action.payload}`)
      state.comment = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__getComment.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__getComment.fulfilled, (state, action) => {
        state.isLoading = false
        state.comment = action.payload
      })
      .addCase(__getComment.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { updateComment } = commentSlice.actions
export default commentSlice.reducer
