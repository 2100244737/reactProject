// 单独 创建的reducer 处理发送过来的action
const initstate = {
  value: '默认值'
}
const reducer = (state=initstate, action) => {
  console.log("reducer", state,"...",action);
  switch (action.type) {
    case "send_type":
    return Object.assign({}, state, action)
    default:
      return state
  }
};
module.exports = {
  reducer
}
