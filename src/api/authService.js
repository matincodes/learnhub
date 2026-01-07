import axiosInstance from './axiosInstance'

const loginEndpoints = {
  student: '/student/login/',
  admin: '/admin/login/',
}

const signupEndpoints = {
  student: '/student/signup/',
  admin: '/admin/signup/',
}

/**
 * Login API call - throws on error for React Query to handle
 */
export const loginApi = async ({ role, credentials }) => {
  const { data } = await axiosInstance.post(loginEndpoints[role], credentials)

  const userDataResponse = data.data

  return {
    user: {
      id: userDataResponse.id,
      firstName: userDataResponse.first_name,
      lastName: userDataResponse.last_name,
      email: userDataResponse.email,
    },
    tokens: userDataResponse.tokens,
    redirect: data.redirect_url,
  }
}

/**
 * Signup API call - throws on error for React Query to handle
 */
export const signupApi = async ({ role, userData }) => {
  const { data } = await axiosInstance.post(signupEndpoints[role], {
    user: userData,
  })

  if (!data || !data.user_data) {
    throw new Error('Received invalid data structure from server.')
  }

  const userDataResponse = data.user_data

  return {
    user: {
      id: userDataResponse.id,
      firstName: userDataResponse.first_name,
      lastName: userDataResponse.last_name,
      email: userDataResponse.email,
    },
  }
}

/**
 * Refresh access token API call
 */
export const refreshAccessTokenApi = async refreshToken => {
  const { data } = await axiosInstance.post('/refresh/', { refreshToken })
  return data.access
}

/**
 * Verify email API call
 */
export const verifyEmailApi = async token => {
  const { data } = await axiosInstance.get(`/verify/?token=${token}`)
  return data
}

/**
 * Request password reset API call
 */
export const requestPasswordResetApi = async email => {
  const { data } = await axiosInstance.post('student/request-password-reset/', {
    email,
  })
  return data
}

export const confirmResetPasswordApi = async (id, token, newPassword) => {
    const { data } = await axiosInstance.post('student/reset-password/', {
      id,
      token,
      new_password: newPassword,
    })
    return data
}
