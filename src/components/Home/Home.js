import React, { Component, Fragment } from 'react'

import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'

import { indexGames } from '../../api/game'

class Home extends Component {
  _isMounted = false
  constructor () {
    super()

    this.state = {
      newGame: true,
      completedGames: null,
      isLoading: true
    }
  }

  async componentDidMount () {
    this._isMounted = true
    const { user } = this.props
    try {
      if (user && this._isMounted) {
        const response = await indexGames(user)
        const allGames = response.data
        let incompletedGames = null
        let completedGames = null
        if (allGames !== undefined) {
          incompletedGames = allGames.filter(e => e.over === false).length
          completedGames = allGames.filter(e => e.over === true).length
        }

        let isNewGame = null
        if (allGames.length === 0) {
          isNewGame = true
        } else if (incompletedGames) {
          isNewGame = false
        } else {
          isNewGame = true
        }

        setTimeout(() => {
          this.setState({
            newGame: isNewGame,
            completedGames: completedGames,
            isLoading: false
          })
        }, 1000)
      } else {
        setTimeout(() => {
          this.setState({
            isLoading: false
          })
        }, 1000)
      }
    } catch (error) {
      console.error(error)
    }
  }

  async componentWillUnmount () {
    this._isMounted = false
  }

  async componentDidUpdate () {
    const { user } = this.props
    setTimeout(() => {
      if (user === null) {
        this.setState({ isLoading: false })
      }
    }, 1000)
  }

  render () {
    if (this.state.isLoading) {
      return (
        <Fragment>
          <h3>..is Loading</h3>
          <div className="loading-animation">
          </div>
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

    const { newGame, completedGames } = this.state
    const authorizedHome = () => (
      <Fragment>
        <Row className="home-options-container">
          <Jumbotron className="home-options-screen col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="home-options col-xs-12 col-sm-12 col-md-12 col-lg-6">
              {completedGames === 4 ? <h5 className="game-completed">Mission Complete: No more levels!</h5> : newGame ? <Button href="#games"className="home-buttons">New Game</Button> : <Button href="#continue-game" className="home-buttons">Continue Game</Button>}
              <Button href="#game-index" className="home-buttons">Total Games</Button>
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
