import axios from 'axios'

export default axios.create({
  baseURL: process.env.baseUrl,
  timeout: 5000,
  retry: 3,
  retryDelay: 10000
})
