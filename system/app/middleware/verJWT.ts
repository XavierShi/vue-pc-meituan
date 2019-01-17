/*
 * @Author: XavierShi
 * @Description jwt校验中间件
 * @Date: 2019-01-15 10:10:28
 * @Last Modified by: XavierShi
 * @Last Modified time: 2019-01-17 09:22:39
 */
import { Context, Application, EggAppConfig } from "egg"
/**
 * @description
 * @author XavierShi
 * @export
 * @param {EggAppConfig["jwt"]} options
 * @param {Application} app
 * @returns {*}
 */
export default function verJWT(
  options: EggAppConfig["jwt"],
  app: Application
): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    let token = ctx.header.authorization
    if (token) {
      try {
        let ok: any = await app.jwt.verify(token.split(" ")[1], options.secret)
        try {
          let data: any = await app.redis.get(ok.id)
          let user = JSON.parse(data)
          if (user.token !== token.split(" ")[1]) {
            ctx.body = {
              data: {
                code: -99,
                user: user,
                msg: "只允许单点登录!"
              }
            }
          } else {
            await next()
          }
        } catch (error) {}
      } catch (error) {
        if (error.message == "jwt expired") {
          ctx.body = {
            data: {
              code: -99,
              error,
              msg: "Tokne失效，请重新登录!"
            }
          }
        } else {
          ctx.body = {
            data: {
              code: -99,
              error,
              msg: "Tokne错误!"
            }
          }
        }
      }
    } else {
      ctx.body = {
        code: -99,
        msg: "无效的Token!"
      }
    }
  }
}
