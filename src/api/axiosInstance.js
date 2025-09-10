import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://learnhub-backend.up.railway.app/',
  // withCredentials: true,
})

export default axiosInstance
