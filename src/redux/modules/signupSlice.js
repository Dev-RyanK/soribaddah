import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { instance, postSignupInstance } from "../../shared/instance"

const initialState = {
  signup: {
    loginId: "apitest12",
    password: "asd123!@#",
    nickname: "apitTest01",
  },
  isLoading: false,
  error: null,
  msg: "",
}

// 192.168.4.212:8080/api/signup

// thunk
export const __postSignup = createAsyncThunk(
  "signup",
  async (payload, thunkAPI) => {
    try {
      await postSignupInstance.post(`/signup`, payload)
      return thunkAPI.fulfillWithValue(alert("가입 성공!"))
    } catch (err) {
      return thunkAPI.rejectWithValue(err.msg)
    }
  }
)

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {
    postSignup: (state, action) => {
      // ????
      postSignupInstance.post(`/signup`, action.payload)
      // state.signup = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(__postSignup.pending, (state) => {
        state.isLoading = true
      })
      .addCase(__postSignup.fulfilled, (state, action) => {
        state.isLoading = false
        state.comment = action.payload
      })
      .addCase(__postSignup.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  },
})

export const { postSignup } = signupSlice.actions
export default signupSlice.reducer
