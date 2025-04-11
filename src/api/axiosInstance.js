import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://learnhub.up.railway.app/',
  headers: {
    'Content-Type': 'application/json',
  },
  // withCredentials: true,
})

export default axiosInstance
