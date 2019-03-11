import { Controller } from "egg"
import { Description, Get, IgnoreJwt, TagsAll } from "egg-shell-decorators"

@TagsAll("首页poi")
export default class PoiController extends Controller {
  @IgnoreJwt
  @Description("首页搜索")
  @Get("/SearchIndexPoi")
  public async searchIndexPoi() {
    const { ctx } = this
    try {
      let poi = await ctx.model.Poi.find({})
      return {
        code: 0,
        msg: poi
      }
    } catch (error) {
      return {
        code: -1,
        msg: error
      }
    }
  }

  @IgnoreJwt
  @Description("获取热门地点")
  @Get("/GetHotPlace")
  public async getHotPlace() {
    const { ctx } = this
    try {
      let hotplace = await ctx.model.Topsearch.find({}, { _id: 0, __v: 0 })
      return {
        code: 0,
        msg: hotplace
      }
    } catch (error) {
      return {
        code: -1,
        msg: error
      }
    }
  }
}
