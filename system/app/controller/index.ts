import { Controller } from "egg";
import { TagsAll, Get, IgnoreJwt, Description } from "egg-shell-decorators";

@TagsAll("首页接口")
export default class IndexController extends Controller {
  @IgnoreJwt
  @Description("获取首页轮播图片")
  @Get("/GetIndexSlides")
  public async getIndexSlides() {
    const { ctx } = this;
    try {
      let data = await ctx.model.Slide.find({}, { _id: 0 });
      return {
        code: 0,
        msg: data[0]
      };
    } catch (error) {
      return {
        code: -1,
        msg: error
      };
    }
  }

  @IgnoreJwt
  @Description("获取有格调数据")
  @Get("/GetStyles")
  public async getStyles() {
    const { ctx } = this;
    try {
      let data = await ctx.model.Style.find({}, { _id: 0 });
      return {
        code: 0,
        msg: data
      };
    } catch (error) {
      return {
        code: -1,
        msg: error
      };
    }
  }

  @IgnoreJwt
  @Description("获取猫眼电影数据")
  @Get("/GetMaoyans")
  public async getMaoyans() {
    const { ctx } = this;
    try {
      let data = await ctx.model.Maoyan.find({}, { _id: 0 });
      return {
        code: 0,
        msg: data
      };
    } catch (error) {
      return {
        code: -1,
        msg: error
      };
    }
  }

  @IgnoreJwt
  @Description("获取榛果民宿数据")
  @Get("/GetZhenGuos")
  public async GetZhenGuos() {
    const { ctx } = this;
    try {
      let data = await ctx.model.Zhenguo.find({}, { _id: 0 });
      return {
        code: 0,
        msg: data
      };
    } catch (error) {
      return {
        code: -1,
        msg: error
      };
    }
  }

  @IgnoreJwt
  @Description("获取猜你喜欢数据")
  @Get("/GetRecommends")
  public async GetRecommends() {
    const { ctx } = this;
    try {
      let data = await ctx.model.Recommend.find({}, { _id: 0 });
      return {
        code: 0,
        msg: data
      };
    } catch (error) {
      return {
        code: -1,
        msg: error
      };
    }
  }
}
