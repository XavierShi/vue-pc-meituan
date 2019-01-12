export default app => {
  let mongoose = app.mongoose
  let Schema = mongoose.Schema

  let UserSchema = new Schema({
    userName: {
      type: String
    },
    password: {
      type: String
    },
    email: {
      type: String
    },
    phoneNum: {
      type: Number,
      unique: true,
      require: true
    }
  })

  return mongoose.model("User", UserSchema)
}
