import { Controller } from "egg"
import {
  Get,
  Description,
  TagsAll,
  Message
  // BeforeAll
} from "egg-shell-decorators"
// import verJWT from "../middleware/verJWT"

@TagsAll("Home")
// @BeforeAll([verJWT])
export default class HomeController extends Controller {
  @Get("/2")
  @Description("根据id获取用户详情")
  @Message("Hello world")
  public async index() {
    const { ctx } = this
    const token = ctx.header.authorization
    // let ok = await app.jwt.verify(token.split(" ")[1], app.config.jwt.secret)
    return {
      ok: token
      // ok
    }
  }
}
