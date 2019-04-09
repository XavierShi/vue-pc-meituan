/*
 * @Author: XavierShi
 * @Date: 2019-01-23 10:21:49
 * @Last Modified by: mikey.zhaopeng
 * @Last Modified time: 2019-03-17 18:42:13
 */
export default app => {
  let mongoose = app.mongoose;
  let Schema = mongoose.Schema;

  let SlideSchema = new Schema({
    name: String,
    slide: {
      type: Array
    }
  });

  return mongoose.model("Slide", SlideSchema);
};
