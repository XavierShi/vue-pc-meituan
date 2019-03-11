/*
 * @Author: XavierShi
 * @Date: 2019-01-18 09:59:21
 * @Last Modified by: XavierShi
 * @Last Modified time: 2019-01-18 11:30:09
 * @Description 地址接口模块
 */
import { Controller } from "egg"
import { Get, TagsAll, IgnoreJwt } from "egg-shell-decorators"

@TagsAll("定位")
export default class GeoController extends Controller {
  /**
   * @description 获取用户初始定位
   * @author XavierShi
   * @returns
   * @memberof GeoController
   */
  @IgnoreJwt
  @Get("/GetPosition")
  public async getPostion() {
    return {
      code: 0,
      data: {
        province: "北京",
        city: "北京"
      }
    }
  }
}
