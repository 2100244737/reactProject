import React from 'react';
import {Button } from 'antd';
// 导入 react-redux connect 加强数据 第一个括号 放入数据， 第二个括号放入加强的组件
import {connect} from 'react-redux'
// connect 有4个参数 最重要两个 第1个 是接收， 第2个是发送  connect(要接收的函数，要发送的函数)（要加强的组件）
// 组件A是发送方使用第二参数
class comA extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
  handleBtn = () => {
    console.log('111',this.props);
    //发送action
    this.props.sendAction()
  };
    render() {
        return (
            <div>
              <Button onClick={this.handleBtn}  type="primary">react-redux+redux组件A + </Button>
            </div>
        )
    }
}
// 这个函数有个返回值，返回值是一个对象
const mapDispatchToProps = dispatch => {
  return {
      sendAction: ()=>{
        //利用dispatch 发送一个action
        // 在发送的action对象中一定定义type属性
        dispatch({
          type: 'addAction'
        })
      }
  }
};
//comA  发送方 实现connect 用第二参 不需要接收传递null即可
export default connect(null,mapDispatchToProps)(comA)
