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

export const adminStudents = async () => {
  const response = await api.get('/admin/students/')
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

export const adminAddQuizzes = async (dataObj , onUploadProgress) => {
  const response = await api.post('/admin/quiz/create/', dataObj , {
    onUploadProgress
  })
  return response
}
