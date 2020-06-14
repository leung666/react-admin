import React from 'react';
import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Login from './views/login/index'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="test">
        <BrowserRouter>
          <Switch>
            <Route exact component={Login} path="/"/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App;
