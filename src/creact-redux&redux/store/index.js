import {createStore} from 'redux'
// 引入 reducer
import {reducer} from '../reducer'
// 构建 store
// 导出
export default createStore(reducer)
