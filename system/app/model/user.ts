export default app => {
  let mongoose = app.mongoose
  let Schema = mongoose.Schema

  let UserSchema = new Schema({
    userName: {
      type: String,
      unique: true,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    email: {
      type: String
    },
    tel: {
      type: Number
    }
  })

  return mongoose.model("User", UserSchema)
}
