/*
 * @Author: XavierShi
 * @Date: 2019-01-18 11:29:37
 * @Last Modified by: XavierShi
 * @Last Modified time: 2019-01-18 11:58:30
 * @Description 菜单接口
 */
import { Controller } from "egg"
import { Get, IgnoreJwt, TagsAll } from "egg-shell-decorators"

@TagsAll("菜单")
export default class MenuController extends Controller {
  /**
   * @description 获取首页菜单列表
   * @author XavierShi
   * @returns
   * @memberof MenuController
   */
  @IgnoreJwt
  @Get("/GetIndexMenu")
  public async getIndexMenu() {
    const { ctx } = this
    return ctx.model.Menu.find({})
  }
}
