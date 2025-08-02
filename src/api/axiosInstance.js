import axios from 'axios'

const axiosInstance = axios.create({
  baseURL: 'https://learnhub-backend.up.railway.app/',
<<<<<<< HEAD
=======
  headers: {
    'Content-Type': 'application/json',
  },
>>>>>>> ad6717225319d19fd1d6b6ea9849c9259fd5b6d6
  // withCredentials: true,
})

export default axiosInstance
