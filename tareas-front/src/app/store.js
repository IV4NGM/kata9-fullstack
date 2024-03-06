import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../Features/Auth/authSlice'
import tareaReducer from '../Features/Tareas/tareaSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tarea: tareaReducer
  }
})
