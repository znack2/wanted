import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import AuthForm             from '../components/forms/AuthForm'


class PageAuth extends Component {

  constructor (props) {
    super(props)

    this.state = {
      email: '',
      valid: true,
      open: false,
      files: []
    }
  }

  render() {

    return (
      <div>
        <AuthForm />
      </div>
    )
  }
}

export default PageAuth

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
})

const mapStateToProps = (state) => {
  return {
    isLogged: state.auth.isLogged,
  }
}

export default compose(
  connect(mapStateToProps),
)(AuthForm)