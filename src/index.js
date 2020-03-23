import React from 'react';
import ReactDOM from 'react-dom';

// 引入初始化样式
import "normalize.css/normalize.css";

// 引入路由
import Router from './router'
// react-redux + redux 结合使用 导入store
import reactReduxStore from './creact-redux&redux/store'
// 使用react-redux 导入 <Provider/>组件
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={reactReduxStore}>
    <Router />
  </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
