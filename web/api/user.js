import request from './request'

const url = {
  SignIn: '/user/SignIn',
  SignUp: '/user/SignUp',
  VerificationCode: '/user/VerificationCode'
}

export function VerificationCode(params) {
  return request({
    url: url.VerificationCode,
    method: 'get',
    params
  })
}

export function SignIn(data) {
  return request({
    url: url.SignIn,
    method: 'post',
    data
  })
}

// 用户注册
export function SignUp(data) {
  return request({
    url: url.SignUp,
    method: 'post',
    data
  })
}
