import React from 'react'
import { connect } from 'react-redux'
import c from './app.module.sass'

import Slide from './components/Slide/Slide.js'

class App extends React.Component {
  render() {
    return (
      <div className={c.AppContainer}>
        <Slide type={this.props.slideType}></Slide>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    slideType: state.slide.type,
  }
}

export default connect(mapStateToProps, null)(App)
