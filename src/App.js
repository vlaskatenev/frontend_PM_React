import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import InstallSoft from './containers/InstallSoft/InstallSoft'
import History from './containers/History/History'
import HistoryDetail from './containers/HistoryDetail/HistoryDetail'
import TaskMgr from './containers/TaskMgr/TaskMgr'

class App extends Component {

  componentDidMount() {
  }

  render() {
    const routes = (
        <Switch>
          <Route path='/history/:id' component={HistoryDetail}/>
          <Route path='/taskmgr' exact component={TaskMgr}/>
          <Route path='/history' exact component={History}/>
          <Route path='/' exact component={InstallSoft}/>
          <Redirect to={'/'}/>
        </Switch>
    )

    return (
        <Layout>
          {routes}
        </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {

  }
}

function mapDispatchToProps(dispatch) {
  return {

  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
