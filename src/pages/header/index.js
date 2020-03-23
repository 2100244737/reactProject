import React from 'react';
import {
  DollarOutlined
} from '@ant-design/icons';

import './index.css';
class header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          title: ["小米商城","MIUI","IoT","云服务","金融","有品","小爱开放平台","企业团购","资质证照","协议规则","下载app","Select Location"]
        }
    }
    render() {
      const {title} = this.state;
        return (
            <div className="contai">
              <div className="left">
                {
                  title.map((item, index) => (
                    <span  className="span" key={index}>{item}</span>
                  ))
                }
              </div>
              <div className="right">
                <a href="www.baidu.com">登录</a> <b>|</b>
                <a href="www.baidu.com">注册</a> <b>|</b>
                <a href="www.baidu.com">消息通知</a>
              </div>
              <div className="bug">
                <DollarOutlined className="ico"/>
                购物车（0）
              </div>
            </div>
        )
    }
}
export default header
