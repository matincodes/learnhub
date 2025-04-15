import axiosInstance from './axiosInstance'

const loginEndpoints = {
  student: '/student/login/',
  admin: '/admin/login/',
}

const signupEndpoints = {
  student: '/student/signup/',
  admin: '/admin/signup/',
}

export const login = async (role, credentials) => {
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

export const signup = async (role, userData) => {
    const { data } = await axiosInstance.post(signupEndpoints[role], {
      user: userData,
    })
  
    const userDataResponse = data.user_data
  
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

export const refreshAccessToken = async (refreshToken) => {
  const { data } = await axiosInstance.post('/refresh', { refreshToken })
  return data.accessToken
}
