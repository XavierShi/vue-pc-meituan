/*
 * @Author: XavierShi
 * @Date: 2019-01-22 11:54:40
 * @Last Modified by: XavierShi
 * @Last Modified time: 2019-01-22 11:58:52
 * @Description poi表
 */
export default app => {
  let mongoose = app.mongoose
  let Schema = mongoose.Schema

  let PoiSchema = new Schema({
    name: {
      type: String
    },
    province: {
      type: String
    },
    city: {
      type: String
    },
    county: {
      type: String
    },
    areaCode: {
      type: Number
    },
    tel: {
      type: String
    },
    area: {
      type: String
    },
    add: {
      type: String
    },
    type: {
      type: String
    },
    module: {
      type: String
    },
    longtide: {
      type: Number
    },
    latitude: {
      type: Number
    }
  })

  return mongoose.model("Poi", PoiSchema)
}
