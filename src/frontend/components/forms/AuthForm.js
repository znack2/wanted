import React, { Component } from 'react'
import { connect }          from 'react-redux'
import { compose }          from 'redux'
import PropTypes            from 'prop-types'


import Checkbox             from 'material-ui/Checkbox'
import { FormGroup }        from 'material-ui/Form'
import { FormControlLabel } from 'material-ui/Form'


import reducer              from 'app/analysis/reducer'


const fetchFromServer = async({ dispatch, value }) => {
  try {
    const data = {
      'id1': { id: 'id1', value: 'Неделя' },
      'id2': { id: 'id2', value: 'Месяц' },
      'id3': { id: 'id3', value: 'Квартал' },
      'id4': { id: 'id4', value: 'Полугодие' },
      'id5': { id: 'id5', value: 'Год' },
    }

    const order = Object.keys(data)

    dispatch({ type: reducer.types.PERIOD_LOAD_SUCCESS, payload: { data, order, value } })
  } catch(error){
    console.error(error)
  }
}

class AuthForm extends Component {

  static propTypes = {
    data: PropTypes.object,
    order: PropTypes.object
  }

  constructor(props) {
    super(props)

    this.state = {
      checkedId: ''
    }
  }

  componentDidMount() {
    const { dispatch, value } = this.props
    this.setState({ checkedId: value })
    fetchFromServer({ dispatch, value })
  }

  onLogin = () => {
    const { username, password } = this.state
    const { dispatch } = this.props
    dispatch({ type: auth.types.LOGIN_SAGA, payload: { username, password }})
  }

  onLogout = () => {
    const { dispatch } = this.props
    dispatch({ type: auth.types.LOGOUT_SAGA })
  }

  onChange = ({ currentTarget: { value: id } }) => {
    const { dispatch, order, data } = this.props
    const { onSelect } = this.props

    this.setState({ checkedId: id })
    onSelect && onSelect({ id })

    dispatch({
      type: reducer.types.PERIOD_SET,
      payload: { data, order, value: id },
    })
  }
  
  render() {
    const { isLogged, data, order } = this.props
    const { checkedId } = this.state

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

const mapStateToProps = (state) => {
  const { analysis } = state
  const { data = {}, order = [], value, } = analysis
  return { data, order, value, }
}

export default compose (
  connect(mapStateToProps),
)(AuthForm)
