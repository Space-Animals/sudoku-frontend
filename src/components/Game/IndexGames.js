import React, { Component, Fragment } from 'react'

import { indexGames } from '../../api/game'

class IndexGames extends Component {
  constructor () {
    super()

    this.state = {
      completedGames: null,
      isLoading: true
    }
  }

  async componentDidMount () {
    const { user } = this.props
    try {
      const response = await indexGames(user)
      setTimeout(() => {
        this.setState({
          completedGames: response.data.filter(e => e.over === true),
          isLoading: false
        })
      }, 1000)
      console.log(response.data.filter(e => e.over === true))
    } catch (error) {
      console.error(error)
    }
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
    const { completedGames } = this.state
    return (
      <Fragment>
        <div className="total-games">
          <div className="game-message">
            <h3>You have won {completedGames ? completedGames.length : '0'} games!</h3>
          </div>
          <div className="egg-container">
            {completedGames.map((v, i) => (
              <div key={i} className="yoshi-egg"></div>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default IndexGames
