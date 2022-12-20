import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { apis } from "../../shared/api"

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

// thunk
export const __postSignup = createAsyncThunk(
  "signup",
  async (payload, thunkAPI) => {
    try {
      await apis.signup(payload)
      return thunkAPI.fulfillWithValue("success")
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
      apis.signup(action.payload)
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
