import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  toggle: "unset",
  isLoading: false,
  error: null,
  msg: "",
}

const togglePageSlice = createSlice({
  name: "togglePage",
  initialState,
  reducers: {
    goToggle: (state, action) => {
      state.toggle = action.payload
    },
  },
})

export const { toggle, goToggle } = togglePageSlice.actions
export default togglePageSlice.reducer
