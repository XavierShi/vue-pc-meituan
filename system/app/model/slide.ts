/*
 * @Author: XavierShi
 * @Date: 2019-01-23 10:21:49
 * @Last Modified by: XavierShi
 * @Last Modified time: 2019-01-23 10:22:13
 */
export default app => {
  let mongoose = app.mongoose
  let Schema = mongoose.Schema

  let SlideSchema = new Schema({
    slide: {
      type: Array
    }
  })

  return mongoose.model("Slide", SlideSchema)
}
