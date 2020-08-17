import React, { Component, Fragment } from 'react'

import Square from '../Square/Square'
import { newGame, updateGame } from '../../api/game'

class Game extends Component {
  constructor () {
    super()
    this.state = {
      game: null,
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
          game: response.data,
          board: response.data.cells,
          over: response.data.over,
          isLoading: false
        })
      }, 1000)
    } catch (error) {
      console.error(error)
    }
  }

  handleSquare = (event, square, pencilOn) => {
    console.log('success!')
    if (pencilOn === true) {
      document.getElementById(`${square}-${event.target.id - 1}`).innerHTML = event.target.id
    } else {
      document.getElementById(square).innerHTML = event.target.id
      const { user } = this.props
      const { game, over } = this.state
      const num = /\d+/
      const index = square.match(num)[0]
      const value = event.target.id
      updateGame(user, game, index, value, over)
        .then((res) => {
          this.setState({
            game: res.data,
            board: res.data.cells,
            over: over
          })
        })
        .catch(error => console.error(error))
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
              <Square key={index} handleSquare={this.handleSquare} squareID={'square-' + index} value={value}/>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Game
