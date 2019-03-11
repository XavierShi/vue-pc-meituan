import request from './request'

const url = {
  SignIn: '/user/SignIn',
  SignUp: '/user/SignUp',
  VerificationCode: '/user/VerificationCode'
}

// 用户登录
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

// 发送验证码
export function VerificationCode(params) {
  return request({
    url: url.VerificationCode,
    method: 'get',
    params
  })
}

// test
export function Test(params) {
  return request({
    url: '/home/2',
    methods: 'get',
    params
  })
}
