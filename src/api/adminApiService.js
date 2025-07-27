import {
  getAdminAuthData,
  saveAdminAuthData,
  clearAdminAuthData,
} from '@/lib/adminTokenStorage'
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

    // ❗️DON’T set content-type for FormData — let the browser handle it
    if (!(config.data instanceof FormData)) {
      config.headers['Content-Type'] = 'application/json'
    }

    return config
  },
  error => Promise.reject(error),
)

api.interceptors.response.use(
  response => response,
  async error => {
    const originalRequest = error.config

    // If token expired and not already trying to refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      try {
        const { refreshToken } = getAdminAuthData()

        // Send request to refresh token
        const res = await axios.post(`${BASE_URL}/token/refresh/`, {
          refreshToken,
        })

        const newAccessToken = res.data.accessToken
        saveAdminAuthData(newAccessToken) // Save the new token

        // Update the header and retry original request
        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`
        return api(originalRequest)
      } catch (refreshError) {
        clearAdminAuthData()
        // Optionally redirect to login page
        window.location.replace('/admin/login')
        return Promise.reject(refreshError)
      }
    }

    return Promise.reject(error)
  },
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
export const adminRemoveStudents = async id => {
  const response = await api.delete(`/admin/student/delete/${id}/`)
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

export const adminAddQuizzes = async (formData, onUploadProgress) => {
  const response = await api.post('/admin/quiz/create/', formData, {
    headers: {
      'Content-Type': 'multipart/form-data', // ✅ Proper content-type for FormData
    },
    onUploadProgress,
  })
  return response
}

export const adminDeleteQuiz = async id => {
  const response = await api.delete(`/admin/quiz/${id}/`)
  return response
}

export const adminGetCategories = async () => {
  const response = await api.get(`/admin/categories/`)
  return response
}

export const adminGetAllCourses = async () => {
  const response = await api.get(`/admin/courses/`)
  return response
}
