import axios from '@nuxtjs/axios'

export default isTest => {
  if (isTest) {
    axios.defaults.baseURL = `http://127.0.0.1:7001`
  }
}
