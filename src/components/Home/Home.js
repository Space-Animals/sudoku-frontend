import React, { Component, Fragment } from 'react'

import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'

import { indexGames } from '../../api/game'

class Home extends Component {
  constructor () {
    super()

    this.state = {
      newGame: true,
      isLoading: true
    }
  }

  async componentDidMount () {
    console.log('Hello!')
    const { user } = this.props
    try {
      if (user) {
        const response = await indexGames(user)
        const allGames = response.data
        let incompletedGames = null
        if (allGames !== undefined) {
          incompletedGames = allGames.filter(e => e.over === false).length
        }
        let isNewGame = null
        if (allGames.length === 0) {
          isNewGame = true
        } else if (incompletedGames) {
          isNewGame = false
        } else {
          isNewGame = true
        }
        this.setState({
          newGame: isNewGame,
          isLoading: false
        })
      } else {
        this.setState({
          isLoading: false
        })
      }
    } catch (error) {
      console.error(error)
    }
  }
  render () {
    if (this.state.isLoading) {
      return (
        <Fragment>
          <h3>... is Loading :)</h3>
        </Fragment>
      )
    }
    const { user } = this.props
    const home = () => (
      <Fragment>
        <Row className="home-options-container">
          <Jumbotron className="home-options-screen col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="home-options col-xs-12 col-sm-12 col-md-12 col-lg-6">
              <Button href="#sign-up"className="home-buttons">Sign Up!</Button>
              <Button href="#sign-in" className="home-buttons">Sign In</Button>
              <Button href="#how-to-play" className="home-buttons">How To Play!</Button>
            </div>
          </Jumbotron>
        </Row>
      </Fragment>
    )
    const { newGame } = this.state
    const authorizedHome = () => (
      <Fragment>
        <Row className="home-options-container">
          <Jumbotron className="home-options-screen col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="home-options col-xs-12 col-sm-12 col-md-12 col-lg-6">
              {newGame ? <Button href="#games"className="home-buttons">New Game</Button> : <Button href="#continue-game" className="home-buttons">Continue Game</Button>}
              <Button href="#game-index" className="home-buttons">Games Completed</Button>
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
