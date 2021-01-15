import React, {Component} from 'react'
import Layout from './hoc/Layout/Layout'
import {Redirect, Route, Switch, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import InstallSoft from './containers/InstallSoft/InstallSoft'
import History from './containers/History/History'
import TaskMgr from './containers/TaskMgr/TaskMgr'
import RenderPopUpContex from './components/PopUp/PopUpContex'

class App extends Component {

  componentDidMount() {
  }

  render() {
    const routes = (
        <Switch>
          <Route path='/taskmgr' exact component={TaskMgr}/>
          <Route path='/history' exact component={History}/>
          <Route path='/' exact component={InstallSoft}/>
          <Redirect to={'/'}/>
        </Switch>
    )

    return (
      <React.StrictMode>
        <RenderPopUpContex>
          <Layout>
            {routes}
          </Layout>
        </RenderPopUpContex>
      </React.StrictMode>  
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
