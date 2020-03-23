import React from 'react';
// 导入 react-redux connect 加强数据 第一个括号 放入数据， 第二个括号放入加强的组件
import {connect} from 'react-redux'
// connect 有4个参数 最重要两个 第1个 是接收， 第2个是发送  connect(要接收的函数，要发送的函数)（要加强的组件）
// 组件B是接收方使用第一参数
class comB extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <div>
              {this.props.count}
            </div>
        )
    }
}
const mapStateToProps= (state) => {
  console.log("comB",state);
  return state
}
export default connect(mapStateToProps,null)(comB)
