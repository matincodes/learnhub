import { getAdminAuthData } from '@/lib/adminTokenStorage'
import axios from 'axios'

const BASE_URL = 'https://learnhub-backend.up.railway.app'
const api = axios.create({
  baseURL: BASE_URL,
})

api.interceptors.request.use(
  config => {
    const { accessToken } = getAdminAuthData()
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`
    }
    return config
  },
  error => Promise.reject(error),
)

export const adminSignUp = async data => {
  const response = await api.post('/admin/signup/', {
    user: data,
  })
  return response
}

export const adminLogin = async data => {
  const response = await api.post('/admin/login/', data)
  return response
}

export const adminDashboard = async () => {
  const response = await api.get('/admin/dashboard/')
  return response.data
}

export const adminUserManagement = async () => {
  const response = await api.get('/users/')
  return response.data
}

export const adminChangePassword = async data => {
  const response = await api.post('/admin/settings/change-password/', data)
  return response
}

export const adminGetQuizzes = async () => {
  const response = await api.get('/admin/quizzes/')
  return response
}

export const adminAddQuizzes = async () => {
  const response = await api.post('/admin/quiz/create/')
  return response
}
