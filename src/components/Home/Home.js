import React, { Component, Fragment } from 'react'

import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'

class Home extends Component {
  render () {
    const { user } = this.props
    const home = () => (
      <Fragment>
        <Row className="home-options-container">
          <Jumbotron className="home-options-screen col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="home-options col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Button href="#sign-up"className="home-buttons">Sign Up!</Button>
              <Button href="#sign-in" className="home-buttons">Sign In</Button>
              <Button href="#how-to-play" className="home-buttons">How To Play!</Button>
            </div>
          </Jumbotron>
        </Row>
      </Fragment>
    )

    const authorizedHome = () => (
      <Fragment>
        <Row className="home-options-container">
          <Jumbotron className="home-options-screen col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="home-options col-xs-12 col-sm-12 col-md-6 col-lg-6">
              <Button href="#games"className="home-buttons">New Game</Button>
              <Button href="#completed-games"className="home-buttons">Completed Games</Button>
              <Button href="#how-to-play" className="home-buttons">How To Play!</Button>
              <Button href="#change-password"className="home-buttons">Change Password</Button>
              <Button href="#sign-out"className="home-buttons">Sign Out</Button>
            </div>
          </Jumbotron>
        </Row>
      </Fragment>
    )
    return (
      <Fragment>
        {user ? authorizedHome() : home()}
      </Fragment>
    )
  }
}

export default Home
