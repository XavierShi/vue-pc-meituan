const Router = require('koa-router')
const axios = require('axios')
import url from '../../api/url'

let router = new Router({
  prefix: '/user'
})

// 登录接口
router.post('/SignIn', async ctx => {
  try {
    let {
      data
    } = await axios.post(`${url.Api}/user/SignIn`, ctx.request.body)
    ctx.cookies.set('meituan_token', 'Bearer ' + data.data.token, {
      domain: '127.0.0.1',
      path: '/',
      maxAge: 60000 * 60 * 168,
      httpOnly: false
    })
    ctx.body = data
  } catch (error) {}
})

module.exports = router
