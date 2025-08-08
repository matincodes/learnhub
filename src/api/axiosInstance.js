import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://learnhub-backend.up.railway.app/',
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
})

export default axiosInstance
