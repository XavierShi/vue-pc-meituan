import { Controller } from "egg"
import {
  Get,
  IgnoreJwtAll,
  Description,
  TagsAll,
  Message
} from "egg-shell-decorators"

@TagsAll("用户")
@IgnoreJwtAll
export default class HomeController extends Controller {
  @Get("/2")
  @Description("根据id获取用户详情")
  @Message("Hello world")
  public async index() {
    return this.ctx.model.User.find({})
  }
}
