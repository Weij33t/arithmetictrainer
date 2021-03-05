import React from 'react'
import { connect } from 'react-redux'
import c from './app.module.sass'
import AuthSlide from './components/Auth/AuthSlide'
import { Redirect, Route, Switch } from 'react-router-dom'

import * as auth from './components/Auth/redux/actionCreator.js'
import MainSlide from './components/MainSlide/MainSlide.js'
import TrainSlide from './components/TrainSlide/TrainSlide.js'

class App extends React.Component {
  componentDidMount() {
    this.props.onTryAutoSignUp()
  }

  render() {
    console.log(this.props.isLogged)
    return (
      <div className={c.AppContainer}>
        <Switch>
          <Route
            path={'/'}
            exact
            component={() => (
              <MainSlide
                isLogged={this.props.isLogged}
                type={'main'}
              ></MainSlide>
            )}
          />
          <Route path={'/reg'} component={AuthSlide} />
          <Route path={'/train'} component={TrainSlide} />
          {this.props.isLogged ? <Redirect from="/reg" to="/" /> : null}
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    slideType: state.slide.type,
    isLogged: state.auth.isLogged,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignUp: () => dispatch(auth.checkAuthState()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
