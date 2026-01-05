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

  console.log('Login successful response:', data)

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
  try {
    // --- Code that might fail goes in the try block ---
    const { data } = await axiosInstance.post(signupEndpoints[role], {
      user: userData,
    });

    console.log('Signup successful response:', data);

    // Optional: Add a check to ensure the response structure is as expected
    if (!data || !data.user_data) {
        console.error("Signup response missing expected fields:", data);
        // Throw a specific error if the successful response is malformed
        throw new Error("Received invalid data structure from server.");
    }

    const userDataResponse = data.user_data;

    // Return the formatted data on success
    return {
      success: true,
      user: {
        id: userDataResponse.id,
        firstName: userDataResponse.first_name,
        lastName: userDataResponse.last_name,
        email: userDataResponse.email,
      }
    };

  } catch (error) {
    const errorMessage = error.response?.data || error.message || 'An error occurred during signup';

    console.error('Signup failed:', errorMessage);
    return {
      success: false,
      error: errorMessage
    };
   
  }
};

export const refreshAccessToken = async (refreshToken) => {
  const { data } = await axiosInstance.post('/refresh', { refreshToken })
  return data.accessToken
}

// Verify email / account using the token sent via email
export const verifyEmail = async (token) => {
  try {
    const { data } = await axiosInstance.get(`/verify/?token=${token}`)
    return { success: true, data }
  } catch (error) {
    const err = error.response?.data || error.message || 'Verification failed'
    console.error('Email verification failed:', err)
    return { success: false, error: err }
  }
}

export const requestPasswordReset = async (email) => {
  try {
    const { data } = await axiosInstance.post('student/request-password-reset/', { email })
    return { success: true, data }
  } catch (error) {
    const err = error.response?.data || error.message || 'Password reset request failed'
    console.error('Password reset request failed:', err)
    return { success: false, error: err }
  }
}

export const     confirmResetPassword = async (id, token, newPassword) => {
  try {
    const { data } = await axiosInstance.post('student/reset-password/', {
      id,
      token,
      new_password: newPassword,
    })
    return { success: true, data }
  } catch (error) {
    const err = error.response?.data || error.message || 'Password reset failed'
    console.error('Password reset failed:', err)
    return { success: false, error: err }
  }
}