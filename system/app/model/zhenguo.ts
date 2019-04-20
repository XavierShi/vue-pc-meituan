/*
 * @Author: XavierShi
 * @Date: 2019-04-15 19:22:31
 * @Last Modified by: XavierShi
 * @Last Modified time: 2019-04-15 19:24:04
 * @Desctiption 获取榛果民宿数据
 */
export default app => {
  let mongoose = app.mongoose;
  let Schema = mongoose.Schema;

  let ZhenguoSchema = new Schema({
    title: {
      type: String
    },
    item: {
      type: Array
    }
  });

  return mongoose.model("Zhenguo", ZhenguoSchema);
};
