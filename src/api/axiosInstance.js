import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://learnhub-backend.up.railway.app/',
})

export default axiosInstance
