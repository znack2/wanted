import PropTypes            from 'prop-types'
import React                from 'react'

const ContextType = {
  insertCss: PropTypes.func.isRequired,
  getClient: PropTypes.func.isRequired,
  setClient: PropTypes.func.isRequired,
  getStore: PropTypes.func.isRequired,
  setStore: PropTypes.func.isRequired,
  req: PropTypes.object,
  res: PropTypes.object,
}

class App extends React.PureComponent {

  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
  }

  static childContextTypes = ContextType

  getChildContext() {
    return this.props.context
  }

  render() {
    return React.Children.only(this.props.children)
  }
}

export default App

