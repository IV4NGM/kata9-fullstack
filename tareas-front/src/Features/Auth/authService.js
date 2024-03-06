import axios from 'axios'

const API_URL = 'https://kata8-backend-avanzado.onrender.com/api/users/'

// Creamos la petición al backend para crear un usuario
const register = async (userData) => {
  const response = await axios.post(API_URL, userData)

  return response.data
}

// Creamos la petición al backend para login usuario
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Logout a un usuario
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  login,
  logout
}

export default authService
