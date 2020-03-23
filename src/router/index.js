import React from 'react';
import {HashRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
import home from '../pages/home'
import echarts from '../pages/echarts/echarts'
class router extends React.Component {
  render() {
    return (
    <Router>
      <Switch>
        <Redirect path="/" to="/home" exact />
        <Route path="/home" component={home} exact/>
        <Route path="/echarts" component={echarts} exact/>
      </Switch>
    </Router>
    )
  }
}

export default router
