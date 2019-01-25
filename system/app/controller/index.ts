import { Controller } from "egg"
import { TagsAll, Get, IgnoreJwt, Description } from "egg-shell-decorators"

@TagsAll("首页接口")
export default class IndexController extends Controller {
  @IgnoreJwt
  @Description("获取首页轮播图片")
  @Get("/GetIndexSlides")
  public async getIndexSlides() {
    const { ctx } = this
    try {
      let sliders = await ctx.model.Slide.find({}, { _id: 0 })
      return {
        code: 0,
        msg: sliders[0]
      }
    } catch (error) {
      return {
        code: -1,
        msg: error
      }
    }
  }

  @IgnoreJwt
  @Description("获取有格调数据")
  @Get("/GetStyles")
  public async getStyles() {
    const { ctx } = this
    try {
      let styles = await ctx.model.Style.find({}, { _id: 0 })
      return {
        code: 0,
        msg: styles
      }
    } catch (error) {
      return {
        code: -1,
        msg: error
      }
    }
  }
}
