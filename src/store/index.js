import {createStore} from 'redux'
// 导入自己创建好的 reducer
import {reducer} from './reducer'
// 构建 store
const store = createStore(reducer);
// 导出
export default store
