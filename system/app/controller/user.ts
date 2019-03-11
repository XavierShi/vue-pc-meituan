/*
 * @Author: XavierShi
 * @Date: 2019-01-11 09:48:11
 * @Last Modified by: XavierShi
 * @Last Modified time: 2019-01-18 11:30:17
 * @Description 用户接口模块
 */
import { Controller } from "egg"
import { Post, Get, TagsAll, IgnoreJwt } from "egg-shell-decorators"

@TagsAll("用户")
export default class UserController extends Controller {
  /**
   * @description 发送验证码
   * @author XavierShi
   * @returns
   * @memberof UserController
   */
  @IgnoreJwt
  @Get("/VerificationCode")
  public async verificationCode() {
    let code = new Date().getTime()
    return {
      code: 0,
      msg: "验证码发送成功!",
      phoneNum: this.ctx.query.phoneNum || "",
      VerificationCode: code
    }
  }

  /**
   * @description 用户注册
   * @author XavierShi
   * @returns
   * @memberof UserController
   */
  @IgnoreJwt
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
            let user = ctx.request.body
            if (user.userName === "") {
              user.userName = new Date().getTime()
            }
            let nuser = await ctx.model.User.create(user)
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
   * @description 用户登录接口
   * @author XavierShi
   * @memberof UserController
   */
  @IgnoreJwt
  @Post("/SignIn")
  public async signin() {
    const { ctx, app } = this
    try {
      let user = await ctx.model.User.find({
        $or: [
          { phoneNum: parseInt(ctx.request.body.username) },
          { userName: ctx.request.body.username },
          { email: ctx.request.body.username }
        ]
      })
      if (user.length) {
        let userInfo = {
          _id: ""
        }
        if (
          user.some(item => {
            userInfo = item
            return item.password == ctx.request.body.password
          })
        ) {
          const token = app.jwt.sign(
            {
              id: userInfo._id
            },
            app.config.jwt.secret,
            {
              expiresIn: "365d"
            }
          )
          await app.redis.set(
            userInfo._id,
            JSON.stringify({
              token
            })
          )
          return {
            code: 0,
            msg: "登录成功!",
            token,
            userInfo
          }
        } else {
          return {
            code: -1,
            msg: "用户名或密码错误!"
          }
        }
      } else {
        return {
          code: -1,
          msg: "用户不存在!"
        }
      }
    } catch (error) {
      return {
        code: -1,
        msg: error
      }
    }
  }

  /**
   * @description 在用户登录状态下获取用户信息
   * @author XavierShi
   * @memberof UserController
   */
  @Get("/GetAuth")
  public async getAuth() {
    const { ctx, app } = this
    try {
      let token = ctx.header.authorization
      let ok: any = await app.jwt.verify(token.split(" ")[1], app.config.secret)
      let user: any = await ctx.model.User.find({ _id: ok.id }, { password: 0 })
      if (user.length) {
        return {
          code: 0,
          msg: user
        }
      } else {
        return {
          code: -1,
          msg: "没有此用户信息！"
        }
      }
    } catch (error) {}
  }
}
