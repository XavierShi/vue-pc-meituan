/*
 * @Author: XavierShi
 * @Date: 2019-01-22 14:15:59
 * @Last Modified by: XavierShi
 * @Last Modified time: 2019-01-22 15:42:34
 * @Description 热门地点表
 */
export default app => {
  let mongoose = app.mongoose
  let Schema = mongoose.Schema

  let TopSearchSchema = new Schema({
    id: {
      type: String
    },
    value: {
      type: String
    }
  })

  return mongoose.model("Topsearch", TopSearchSchema)
}
