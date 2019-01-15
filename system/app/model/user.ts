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
