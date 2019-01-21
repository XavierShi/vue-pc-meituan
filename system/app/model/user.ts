/*
 * @Author: XavierShi
 * @Date: 2019-01-18 11:53:01
 * @Last Modified by:   XavierShi
 * @Last Modified time: 2019-01-18 11:53:01
 * @Description
 */
export default app => {
  let mongoose = app.mongoose
  let Schema = mongoose.Schema

  let UserSchema = new Schema({
    userName: {
      type: String,
      unique: true,
      require: false
    },
    password: {
      type: String
    },
    email: {
      type: String,
      unique: true,
      require: false
    },
    phoneNum: {
      type: Number,
      unique: true,
      require: true
    }
  })

  return mongoose.model("User", UserSchema)
}
