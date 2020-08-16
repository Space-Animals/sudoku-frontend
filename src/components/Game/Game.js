import React, { Component, Fragment } from 'react'

import Square from '../Square/Square'
import { newGame } from '../../api/game'

class Game extends Component {
  constructor () {
    super()
    this.state = {
      board: null,
      isLoading: true,
      over: false
    }
  }

  async componentDidMount () {
    const { user } = this.props
    try {
      const response = await newGame(user)
      setTimeout(() => {
        this.setState({
          board: response.data.cells,
          over: response.data.over,
          isLoading: false
        })
      }, 1000)
    } catch (error) {
      console.error(error)
    }
  }

  render () {
    const { board, over } = this.state
    if (this.state.isLoading) {
      return (
        <Fragment>
          <h3>... is Loading :)</h3>
        </Fragment>
      )
    }
    return (
      <Fragment>
        {console.log(board)}
        {console.log(over)}
        <div className="game-container">
          <div className="board">
            {this.state.board.map((value, index) => (
              <Square key={index} squareID={'square-' + index} value={value}/>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Game
