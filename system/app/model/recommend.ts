/*
 * @Author: XavierShi
 * @Date: 2019-04-16 17:52:32
 * @Last Modified by: XavierShi
 * @Last Modified time: 2019-04-16 17:54:06
 * @Description 获取猜你喜欢数据
 */
export default app => {
  let mongoose = app.mongoose;
  let Schema = mongoose.Schema;

  let RecommendSchema = new Schema({
    title: {
      type: String
    },
    imgUrl: {
      type: String
    },
    score: {
      type: Number
    },
    comment: {
      type: Number
    },
    address: {
      type: String
    },
    price: {
      type: String
    }
  });

  return mongoose.model("Recommend", RecommendSchema);
};
