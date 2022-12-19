import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { postSignupInstance } from "../../shared/instance"

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

// 192.168.4.212:8080/api/login

// thunk
export const __postLogin = createAsyncThunk(
  "signup",
  async (payload, thunkAPI) => {
    try {
      await postSignupInstance.post(`/login`, payload)
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
      postSignupInstance.post(`/login`, action.payload)
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
