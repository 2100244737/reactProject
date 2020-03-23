// 创建redux reducer 处理发送过来的action

// 接受两个参数
// 第一个参 state
// 第二个参 action
// 初始化值
const init = {
  count: 0
};
const reducer = (state = init, action) => {
   switch (action.type) {
     case "addAction":
       // 返回市一个对象
       return {
         count: state.count+1
       };
     default:
       return state
   }

};
module.exports = {
  reducer
};
