import React                from 'react'
import PropTypes            from 'prop-types'
import { Helmet }           from 'react-helmet'
import { Button }           from 'semantic-ui-react'
import { Header }           from 'semantic-ui-react'
import { Segment }          from 'semantic-ui-react'
import withStyles           from 'isomorphic-style-loader/lib/withStyles'


const NotFound = ({ title }) => (
  <div className={ s.root }>
    <Helmet>
      <title>{ title }</title>
    </Helmet>
    <Segment>
      <Header>Page not found</Header>
    </Segment>
    <Button onClick={ () => go(`/`) }>Home</Button>
  </div>
)

export default withStyles(s)(NotFound)