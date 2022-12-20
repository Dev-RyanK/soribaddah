import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { apis } from "../../shared/api"

const initialState = {
  login: {
    loginId: "",
    password: "",
  },
  isLogin: null,
  isLoading: false,
  error: null,
  msg: "",
}

// thunk
export const __postLogin = createAsyncThunk(
  "post/login",
  async (payload, thunkAPI) => {
    try {
      await apis.login(payload)
      return thunkAPI.fulfillWithValue(alert("로그인 되었습니다."))
    } catch (err) {
      return thunkAPI.rejectWithValue(err.msg)
    }
  }
)

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    postSignup: (state, action) => {
      apis.login(action.payload)
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__postLogin.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__postLogin.fulfilled, (state, action) => {
        state.isLoading = false
        state.comment = action.payload
      })
      .addCase(__postLogin.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { login } = loginSlice.actions
export default loginSlice.reducer
