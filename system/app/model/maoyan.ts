/*
 * @Author: XavierShi
 * @Date: 2019-04-10 13:14:56
 * @Last Modified by: XavierShi
 * @Last Modified time: 2019-04-10 13:16:06
 * @Description 获取猫眼电影数据
 */
export default app => {
  let mongoose = app.mongoose;
  let Schema = mongoose.Schema;

  let MaoyanSchema = new Schema({
    title: {
      type: String
    },
    item1: {
      type: Array
    },
    item2: {
      type: Array
    }
  });

  return mongoose.model("Maoyan", MaoyanSchema);
};
