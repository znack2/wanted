import React, { Component } from 'react'
import PropTypes            from 'prop-types'
import { ApolloProvider }   from 'react-apollo'

import createClient         from '../../apollo'
import subsystemConfig      from '../../config'
import createStore          from '../../redux'

const { name } = subsystemConfig

// import createDebugger       from 'engine/debug'
// const debug = createDebugger(`${ name }:Subsystem`)

const ContextType = {
  insertCss: PropTypes.func.isRequired,
  getClient: PropTypes.func.isRequired,
  setClient: PropTypes.func.isRequired,
  getStore: PropTypes.func.isRequired,
  setStore: PropTypes.func.isRequired,
  req: PropTypes.object,
  res: PropTypes.object,
}

class Subsystem extends Component {

  static propTypes = {
    context: PropTypes.shape(ContextType).isRequired,
    children: PropTypes.element.isRequired,
  }

  componentWillMount() {
    const { context } = this.props
    const { getClient, getStore, setClient, setStore } = context
    this.client = getClient(name)
    if (!this.client) {
      this.client = createClient(context)
      setClient(name, this.client)
    }

    this.store = getStore(name)
    if (!this.store) {
      this.store = createStore({ client: this.client })
      setStore(name, this.store)
    }
  }

  render() {
    return (
      <ApolloProvider client={ this.client } store={ this.store }>
        { this.props.children }
      </ApolloProvider>
    )
  }
}

export default Subsystem