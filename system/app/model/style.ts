/*
 * @Author: XavierShi
 * @Date: 2019-01-24 16:09:55
 * @Last Modified by: XavierShi
 * @Last Modified time: 2019-03-22 19:31:32
 * @Description 获取有格调数据
 */
export default app => {
  let mongoose = app.mongoose;
  let Schema = mongoose.Schema;

  let StyleSchema = new Schema({
    title: {
      type: String
    },
    item: {
      type: Array
    }
  });

  return mongoose.model("Style", StyleSchema);
};
