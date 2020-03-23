import React from 'react';
import {Input, Carousel, BackTop,Button } from 'antd';
import {
  LeftOutlined,
  RightOutlined
} from '@ant-design/icons';
import Hour from '../compoonent/hour'
import Header from '../header'
//导入store
import store from '../../store'
// 导入action 构建函数
import {sendAction} from '../../store/action'
import './App.css';

// 引入组件A和组件B
import ComA from '../compoonent/A.js'
import ComB from '../compoonent/B.js'
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: "2020-03-22 19:00:00",
      text: ["小米手机",
        "Redmi 红米",
        "电视",
        "笔记本",
        "家电",
        "路由器",
        "智能硬件",
        "服务",
        "社区"],
      commodity: ["手机 电话卡", "电视 盒子", "笔记本 显示器 平板", "家电 插线板", "出行 穿戴", "智能 路由器", "电源 配件", "健康 儿童", "耳机 音箱", "生活 箱包"]
    }
  }

  handlePrev = () => {
    this.refs.carousel.prev()
  };
  handleNext = () => {
    this.refs.carousel.next()
  };
  ToEcharts =() => {
    this.props.history.push('/echarts');
  }
  handleClick = () => {
    // 调用action
    const action = sendAction();
    // 发送一个 action
   store.dispatch(action)
  };
  // 当组件加载完毕时， 监听 store的state
  componentDidMount() {
    // 触发监听
    store.subscribe(()=>{
      console.log('123',store.getState());
      this.setState({})
    })
  }

  render() {
    const {text, commodity} = this.state;
    const {Search} = Input;
    return (
      <div className="App">
        <Header/>
        <div className="navigationBar">
          <div className="leftBar">
            <a className="imgIcon" href="www.baidu.com"> </a>
          </div>
          <div className="textBar">
            <div>
              {
                text.map((item, index) => (
                  <span className='text' key={index}>{item}</span>
                ))
              }
            </div>
          </div>

          <div className="search">
            <Search enterButton/>
          </div>
        </div>
        {/*轮播图*/}
        <div className="showLeft">
          <div className="showimg">
            {
              commodity.map((itme, index) => (
                <p className="commodity" key={index}>{itme}</p>
              ))
            }
          </div>
          <div className="slideshow">
            <p className="leftOut" onClick={this.handlePrev}><LeftOutlined className="LeftOutlined"></LeftOutlined></p>
            <p className="rightOut" onClick={this.handleNext}><RightOutlined className="RightOutlined"></RightOutlined>
            </p>
            <Carousel className="carousel" autoplay ref="carousel">
              <div className="imgneer">
                <img className="imgbg"
                     src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6bd4174b8c5aad67a64864a5716ad152.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
                     alt="22"/>
              </div>
              <div className="imgneer">
                <img className="imgbg"
                     src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/755aca9487082e7698e16f17cfb70839.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
                     alt=""/>
              </div>
              <div className="imgneer">
                <img className="imgbg"
                     src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/a4aa0cbfad7de34618c4bebdbdeee4e1.jpg?thumb=1&w=1533&h=575&f=webp&q=90"
                     alt=""/>
              </div>
              <div className="imgneer">
                <img className="imgbg"
                     src="https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ac739bdff12cf2ef4c305ef79f03b4b3.jpg?w=2452&h=920"
                     alt=""/>
              </div>
            </Carousel>
          </div>
        </div>
        {/*小米闪购*/}
        <div className="xiaomi">
          <h1>小米闪购</h1>
          <div className="bugMi">
            <p className="round">10:00场</p>
            <img src="data:img/jpg;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAA1CAYAAAAklDnhAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJ
bWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdp
bj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6
eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDE0IDc5LjE1
MTQ4MSwgMjAxMy8wMy8xMy0xMjowOToxNSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJo
dHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlw
dGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAv
IiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RS
ZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpD
cmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5j
ZUlEPSJ4bXAuaWlkOjY4Q0ZFMkY5MTJFNzExRThCMkM4OEM1RTNBNjczQUVBIiB4bXBNTTpEb2N1
bWVudElEPSJ4bXAuZGlkOjY4Q0ZFMkZBMTJFNzExRThCMkM4OEM1RTNBNjczQUVBIj4gPHhtcE1N
OkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjhDRkUyRjcxMkU3MTFFOEIy
Qzg4QzVFM0E2NzNBRUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjhDRkUyRjgxMkU3MTFF
OEIyQzg4QzVFM0E2NzNBRUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94Onht
cG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz5oEyacAAACoklEQVR42sSYv0tbURTHX0LqD6T4g4pE
cHDoUOloBxVd/QFFEcQqWtrSKlKFmmAslopohzgIbv4FwUEE0clFujiIi+BSIbRQ0ooKRReRULHf
S48Qgu++c3/FAx+iyU3eJzf3nnPuC/1qavQ04zVY8szjCHRGNN9cBD6DSkOJKzAGzsOaH/AW1FuY
jRg4EH/oiJSCTxYk1sDK7T86Iu9BraHED/Au9wlVkYdg2lAiC/rBhYnIB/DIUOQj2M9/UkWkCsQN
JbbA8l0vqIhMgXIDiZ/gFbgxEakBEwYSf8Eg+OM3gCsyA8oMRETy25UN4IjUgVEDiW2wGDSIIzIL
ijUljsFLv3WhIvKYFphOXNO6OOUMDhKZA7qFcQF85Q6WXeQpeKEpcULlvY8xthp8iwR8I93qLLb7
KnOsSPWNfhd6Bro99yHqTi9IhyWzEXIsIXbSG7Djt1jbQHsBZkMkyZRs13wpgIRoiJKy7dsBWh1L
bN5Vt3JFQrQ2XMYeGKBk5yvSI7aRQ4k0eA4uZZlVPM47lDgTZxd6lKb4AcqkLuKSZiIdVGsiVFNc
xDV9yT1Orekjoe+MDw4pHqwmaJewit66Ql0QaX+DOTaZe4DitAFZxQaaEynKnJ6KCDeaQAtj3A7V
kBtXIpwT3iFV06zqquaKPKEtKIsM6Mo/StoWiQeMvSCJjO4+54hEwTCjuTk0STgckUm6QxTY3LgU
Kc+/jyFrblyKCIkKbnPjSkT8HDGV5saVyBAtVHZz40Ik7HNTRtrcuBARF2tQbW5ciCR0mhvbIs2E
cnNjWySh29zYFGnIK25KzY1Nkdziptzc2BKJUu7Qbm5sicQom2o3NzZEKqiu/DZpbmyIjIAHNBMZ
7x4iTALjhcgVQSIl3v87w5vePcY/AQYAFYR6skFSqBUAAAAASUVORK5CYII=" alt=""/>
            <p className="desc">距离结束还有</p>
            <Hour endTime={this.state.time}></Hour>
          </div>
          <div className="clickTo" onClick={this.ToEcharts}>
            点击我跳转页面
          </div>
          <div className="button">
            <Button  onClick={this.handleClick} type="primary">点击redux状态管理</Button>
            <span>{store.getState().value}</span>
          </div>
          <div className="comAB">
            <ComA/>
            <ComB/>
          </div>
        </div>

        {/*回到顶点*/}
        <BackTop visibilityHeight={300}>
          <div className="ant-back-top-inner">UP</div>
        </BackTop>

      </div>
    );
  }
}

export default App;
