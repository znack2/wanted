import React, { PropTypes } from 'react'

import bowser               from 'bowser'

import { Button }           from 'semantic-ui-react'
import { Container }        from 'semantic-ui-react'
import { Dropdown }         from 'semantic-ui-react'
import { Flag }             from 'semantic-ui-react'
import { Grid }             from 'semantic-ui-react'
import { Header }           from 'semantic-ui-react'
import { Image }             from 'semantic-ui-react'
import { List }             from 'semantic-ui-react'
import { Menu }             from 'semantic-ui-react'
import { Message }          from 'semantic-ui-react'
import { Segment }          from 'semantic-ui-react'

import storage                from 'store'
import { compose }            from 'redux'

import withSessionCurrentUser from '../../modules/session/graphql/currentUser'

import withI18nData           from '../../modules/i18n/graphql/data'
import withI18nCreated        from '../../modules/i18n/graphql/created'
import withI18nUpdated        from '../../modules/i18n/graphql/updated'
import withI18nDeleted        from '../../modules/i18n/graphql/deleted'

import withStyles             from 'isomorphic-style-loader/lib/withStyles'


// import createDebugger       from 'engine/debug'
// const debug = createDebugger(require(`./package.json`).name)
// import go                   from 'engine/history/go'

const ContextType = {
  translate: PropTypes.func.isRequired,
}

const languageMap = {
  ru: 'ru',
  en: 'us',
}

class Layout extends React.Component {
  static childContextTypes = ContextType

  constructor(props) {
    super(props)

    this.state = {
      lang: `en`
    }
  }

  componentDidMount() {
    const lang = storage.get(`stories.lang`) || `en`
    this.setState({ lang })
  }

  componentWillUpdate(nextProps, nextState) {
    const { lang } = nextState
    if (lang !== this.state.lang) storage.set(`stories.lang`, lang)
  }

  translate = (name) => {
    const { lang } = this.state
    const { i18nDataByLangName = {} } = this.props

    // debug(`translate()`, `i18nDataByLangName`, i18nDataByLangName)
    // debug(`translate()`, `lang`, lang)

    const { [lang]: dictionary = {} } = i18nDataByLangName
    const { [name]: value } = dictionary
    return value || name
  }

  getChildContext() {
    return {
      translate: this.translate
    }
  }

  renderAndroid() {
    if (bowser.chrome) return null
    if (!bowser.android) return null
    if (parseFloat(bowser.osversion) >= 4.3) return null
    return (
      <Message
        error
        header="Your Android version is old"
        list={[
          `Please use browser Chrome`,
          `Or update Android >= 4.4`,
        ]}
      />
    )
  }

  handleLang = (e, { value }) => this.setState({ lang: value })

  renderDropdownTrigger = () => {
    const { lang } = this.state
    return (
      <Flag name={ languageMap[lang] } />
    )
  }

  render() {
    const { translate } = this
    const { children } = this.props

    return (
      <div>
        { this.renderAndroid() }

        <Segment
          className={ s.sectionHeader }
          inverted
          size='large'
          textAlign='center'
          vertical
        >
          <Container>
            <Menu
              inverted
              pointing
              secondary
              size='large'
              style={{ border: `none` }}
            >
              <Menu.Item onClick={ () => go(`/`) }>
                <Image src='/logo1.svg' width={ 50 }/>
                <Header className={ s.logoText } color='teal'>NGINE</Header>
              </Menu.Item>
              <Menu.Menu position='right'>
                <Menu.Item>
                  <Dropdown
                    icon={ null }
                    fluid
                    name='lang'
                    options={[
                      { key: 'ru', value: 'ru', flag: 'ru', text: 'Русский' },
                      { key: 'en', value: 'en', flag: 'us', text: 'English' },
                    ]}
                    placeholder='lang'
                    trigger={ this.renderDropdownTrigger() }

                    onChange={ this.handleLang }
                  />
                </Menu.Item>
                <Menu.Item>
                  <Button
                    content={ translate(`Layout.login`) }
                    inverted

                    onClick={ () => go(`/login`) }
                  />
                </Menu.Item>
              </Menu.Menu>
            </Menu>
          </Container>

        </Segment>

        { children }

        <Segment
          className={ s.sectionFooter }
          textAlign='center'
          inverted
          size='large'
          vertical
        >
          <Container>
            <Grid
              divided
              stackable
            >
              <Grid.Column widescreen={ 3 } className={ s.alignLeft }>
                <Header inverted>{ translate(`about`) }</Header>
                <List>
                  <List.Item>{ translate(`author`) }</List.Item>
                  <List.Item>{ translate(`company`) }</List.Item>
                  <List.Item>{ translate(`engine`) }</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column widescreen={ 4 } className={ s.alignLeft }>
                <Header inverted>{ translate(`technologies`) }</Header>
                <List>
                  <List.Item>React</List.Item>
                  <List.Item>Redux</List.Item>
                  <List.Item>GraphQL</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column widescreen={ 5 } className={ s.alignLeft }>
                <Header inverted>{ translate(`articles`) }</Header>
                <List>
                  <List.Item>React packages</List.Item>
                  <List.Item>Isomorphic app</List.Item>
                  <List.Item>Stories editor</List.Item>
                </List>
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </div>
    )
  }
}

export default compose(
  withSessionCurrentUser(),

  withI18nData(),
  withI18nCreated(),
  withI18nUpdated(),
  withI18nDeleted(),

  withStyles(s),
)(Layout)