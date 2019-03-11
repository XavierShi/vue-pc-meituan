/*
 * @Author: XavierShi
 * @Date: 2019-01-18 11:54:52
 * @Last Modified by: XavierShi
 * @Last Modified time: 2019-01-18 11:55:24
 * @Description menu表
 */
export default app => {
  let mongoose = app.mongoose
  let Schema = mongoose.Schema

  let MenuSchema = new Schema({
    menu: {
      type: Array
    }
  })

  return mongoose.model("Menu", MenuSchema)
}
