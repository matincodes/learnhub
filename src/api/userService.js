// @/services/userService.js
import axiosInstance from '@/api/axiosInstance'

const endpoints = {
  profile: (id) => `student/profile/${id}/`,
  updateProfile: (id) => `student/profile/${id}/`,
  changePassword: 'student/settings/change-password/',
}

export const userService = {
  fetchProfile: async (userId, token) => {
    const response = await axiosInstance.get(endpoints.profile(userId), {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  },

  updateProfile: async (userId, updates, token) => {
    const response = await axiosInstance.patch(endpoints.updateProfile(userId), updates, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  },

  changePassword: async (data, token) => {
    const response = await axiosInstance.post(endpoints.changePassword, data, {
      headers: { Authorization: `Bearer ${token}` },
    })
    return response.data
  }
}

export default userService