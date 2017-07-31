import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { compose }          from 'redux'


class AuthForm extends Component {

  onLogin = () => {
    const { username, password } = this.state
    const { dispatch } = this.props
    dispatch({ type: auth.types.LOGIN_SAGA, payload: { username, password }})
  }

  onLogout = () => {
    const { dispatch } = this.props
    dispatch({ type: auth.types.LOGOUT_SAGA })
  }
  
  render() {
    const { isLogged } = this.props

    if (!isLogged)
      return (
        <div>
          <input name='submit' type='button' onClick={ this.proponLogout } />
        </div>
      )

    return (
      <div>
        <input name='username' />
        <input name='password' />
        <input name='submit' type='button' onClick={ this.onLogin } />
      </div>
    )
  }
}


