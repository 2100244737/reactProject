// 这是action的构造函数 防止代码耦合
const sendAction = function () {
 // 我们需要返回action的对象
  return {
    type: "send_type",
    value: "我是一个action！"
  }
};
//导出对象
module.exports= {
  sendAction
};
