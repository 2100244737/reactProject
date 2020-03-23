import React from 'react';
import './hour.css'
class days extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hour: "00",
      minute: "00",
      second: "00"
    }
  }

  componentDidMount() {
    if (this.props.endTime) {
      let endTime = this.props.endTime.replace(/-/g, "/");
      this.countFun(endTime);
    }
  }

  //组件卸载取消倒计时
  componentWillUnmount() {
    clearInterval(this.timer);
  }

  countFun = (time) => {
    let end_time = new Date(time).getTime(),
      sys_second = (end_time - new Date().getTime());
    this.timer = setInterval(() => {
      //防止倒计时出现负数
      if (sys_second > 1000) {
        sys_second -= 1000;
        let day = Math.floor((sys_second / 1000 / 3600) / 24);
        let hour = Math.floor((sys_second / 1000 / 3600) % 24);
        let minute = Math.floor((sys_second / 1000 / 60) % 60);
        let second = Math.floor(sys_second / 1000 % 60);
        this.setState({
          day: day,
          hour: hour < 10 ? "0" + hour : hour,
          minute: minute < 10 ? "0" + minute : minute,
          second: second < 10 ? "0" + second : second
        })
      } else {
        clearInterval(this.timer);
        //倒计时结束时触发父组件的方法
        //this.props.timeEnd();
      }
    }, 1000);
  }

  render() {
    return (
      <div className="timeDays">
        <span className="hour">{this.state.hour}</span><i className="dian">:</i>
        <span className="minute">{this.state.minute}</span><i className="dian">:</i>
        <span className="second">{this.state.second}</span>
      </div>
    )
  }
}

export default days
