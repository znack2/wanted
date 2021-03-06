import PropTypes            from 'prop-types'
import React,{ Component }  from 'react'


class Html extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    styles: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      cssText: PropTypes.string.isRequired,
    }).isRequired),
    scripts: PropTypes.arrayOf(PropTypes.string.isRequired),
    children: PropTypes.string.isRequired,
  }

  static defaultProps = {
    styles: [],
    scripts: [],
  }

  render() {
    const { title, styles, scripts, subsystems, children } = this.props
    return (
      <html className="no-js" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <title>{ title }</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        {
          styles.map(style =>
            <style
              key={ style.id }
              id={ style.id }
              dangerouslySetInnerHTML={{ __html: style.cssText }}
            />,
          )
        }
        <script dangerouslySetInnerHTML={{
          __html: `window.__SUBSYSTEMS__=${ JSON.stringify(subsystems) };`
        }} />
      </head>
      <body>
      <div
        id="root"
        dangerouslySetInnerHTML={{ __html: children }}
      />
      { scripts.map(script => <script key={ script } src={ script } />) }
      </body>
      </html>
    )
  }
}

export default Html