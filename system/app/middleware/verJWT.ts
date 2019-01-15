/*
 * @Author: XavierShi
 * @Description jwt校验中间件
 * @Date: 2019-01-15 10:10:28
 * @Last Modified by: XavierShi
 * @Last Modified time: 2019-01-15 12:01:25
 */
import { Context, Application, EggAppConfig } from "egg"

export default function verJWT(
  options: EggAppConfig["jwt"],
  app: Application
): any {
  return async (ctx: Context, next: () => Promise<any>) => {
    let token = ctx.header.authorization
    console.log(app)
    let ok = await app.jwt.verify(token.split(" ")[1], options.secret)
    if (ok) {
      await next()
    } else {
      ctx.body = {
        data: {
          code: -1,
          msg: token
        }
      }
    }
  }
}
