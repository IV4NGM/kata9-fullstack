import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  tareas: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ''
}

export const tareaSlice = createSlice({
  name: 'tarea',
  initialState,
  reducers: {
    reset: (state) => initialState
  },
  extraReducers: (bulider) => {
  }
})

export const { reset } = tareaSlice.actions
export default tareaSlice.reducer
