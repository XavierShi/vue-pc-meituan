/*
 * @Author: XavierShi
 * @Date: 2019-01-11 09:48:11
 * @Last Modified by: XavierShi
 * @Last Modified time: 2019-01-11 17:21:20
 */
import { Controller } from "egg"
import { Post, Get } from "egg-shell-decorators"
export default class UserController extends Controller {
  @Get("/VerificationCode")
  public async verificationCode() {
    let code = new Date().getTime()
    return {
      phoneNum: this.ctx.query.phoneNum || "",
      code,
      msg: "验证码发送成功!"
    }
  }

  @Post("/SignUp")
  public async singup() {
    const { ctx, app } = this
    const rule = {
      phoneNum: "int",
      email: {
        type: "email",
        required: false,
        default: ""
      },
      userName: {
        type: "string",
        required: false,
        default: ""
      },
      password: {
        type: "password"
      }
    }
    const error = app.validator.validate(rule, ctx.request.body)
    if (error) {
      return {
        code: -1,
        msg: error
      }
    } else {
      let user = await ctx.model.User.find({
        phoneNum: ctx.request.body.phoneNum
      })
      if (user.length) {
        return {
          code: -1,
          msg: "账号已经注册!"
        }
      } else {
        let nuser = await ctx.model.User.create(ctx.request.body)
        if (!nuser) {
          return {
            code: -1,
            msg: nuser
          }
        } else {
          return {
            code: 0,
            msg: "注册成功！"
          }
        }
      }
    }
  }
}
