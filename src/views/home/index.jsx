import React from 'react'
{{#if redux}}
import { connect } from 'react-redux'

import { updateTitle } from '../../actions/title'
{{/if}}
{{#with scss}}
import * as styles from './home.scss'
{{/with}}
{{#with less}}
import * as styles from './home.less'
{{/with}}
{{#with stylus}}
import * as styles from './home.styl'
{{/with}}

class Home extends React.Component {
  render() {
    return (
      <div className={styles.contianer}>
        <img className={styles.logo} src={require('../../assets/logo.svg')} />
        <p {{#if redux}}onClick={() => updateTitle('for test')} {{/if}}className={styles.title}>{this.props.title}</p>
      </div >
    )
  }
}

{{#if redux}}
export default connect((state) => {
  return {
    title: state.title
  }
})(Home)
{{else}}
export default Home
{{/if}}