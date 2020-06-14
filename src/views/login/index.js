import React, {Component, Fragment} from 'react';
import './index.scss'
//组件
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      formType : 'login'
    }
  }

  switchForm = (value) => {
    this.setState({
      formType : value
    })
  }

  render() {
    return (
      <Fragment>
        <div className="form-wrap">
          <div>
            {this.state.formType === 'login'
              ? <LoginForm switchForm={this.switchForm}/>
              : <RegisterForm switchForm={this.switchForm}/>}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Login;
