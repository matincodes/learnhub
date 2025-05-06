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
  try {
    // --- Code that might fail goes in the try block ---
    const { data } = await axiosInstance.post(signupEndpoints[role], {
      user: userData,
    });

    console.log('Signup successful response:', data);

    // Optional: Add a check to ensure the response structure is as expected
    if (!data || !data.user_data || !data.user_data.tokens) {
        console.error("Signup response missing expected fields:", data);
        // Throw a specific error if the successful response is malformed
        throw new Error("Received invalid data structure from server.");
    }

    const userDataResponse = data.user_data;

    // Return the formatted data on success
    return {
      user: {
        id: userDataResponse.id,
        firstName: userDataResponse.first_name,
        lastName: userDataResponse.last_name,
        email: userDataResponse.email,
      },
      tokens: userDataResponse.tokens,
      redirect: data.redirect_url,
    };

  } catch (error) {
    // --- Error handling logic goes in the catch block ---
    console.error('Signup API call failed:', error.response.data); // Log the error object

   
  }
};

export const refreshAccessToken = async (refreshToken) => {
  const { data } = await axiosInstance.post('/refresh', { refreshToken })
  return data.accessToken
}
