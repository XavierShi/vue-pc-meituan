import request from '../api/request'

export default async ({
  store
}) => {
  console.log('auth')
  if (store.state.user.userToken != '') {
    // request.defaults.headers.Authorization = store.state.user.userToken
  }
  // if(store.user.user)
}
