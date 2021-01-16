import React from 'react'
import Layout from './hoc/Layout/Layout'
import { Redirect, Route, Switch } from 'react-router-dom'
import InstallSoft from './containers/InstallSoft/InstallSoft'
import History from './containers/History/History'
import TaskMgr from './containers/TaskMgr/TaskMgr'
import RenderPopUpContex from './components/PopUp/PopUpContex'

function App() {

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
    )
}


export default App
