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

  /**
   * @description 用户注册
   * @author XavierShi
   * @returns
   * @memberof UserController
   */
  @Post("/SignUp")
  public async singup() {
    const { ctx, app } = this
    const rule = {
      phoneNum: {
        type: "int"
      },
      email: {
        type: "string",
        required: false,
        default: ""
      },
      userName: {
        type: "string",
        required: false,
        default: ""
      },
      password: {
        type: "password",
        allowEmpty: false
      }
    }
    const error = app.validator.validate(rule, ctx.request.body)
    if (error) {
      return {
        code: -1,
        msg: error
      }
    } else {
      try {
        let user = await ctx.model.User.find({
          phoneNum: ctx.request.body.phoneNum
        })
        if (user.length) {
          return {
            code: -1,
            msg: "账号已经注册!"
          }
        } else {
          try {
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
          } catch (error) {}
        }
      } catch (error) {}
    }
  }

  /**
   * @description
   * @author XavierShi
   * @memberof UserController
   */
  @Get("/SignIn")
  public async signin() {}
}
