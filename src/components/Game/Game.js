import React, { Component, Fragment } from 'react'

import Square from '../Square/Square'
import { newGame, updateGame } from '../../api/game'
import { checkForWin } from '../../helpers/helperFunctions'

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
    if (this.state.over === true) {
      return
    }

    if (pencilOn === true) {
      document.getElementById(`${square}-${event.target.id - 1}`).innerHTML = event.target.id
    } else {
      document.getElementById(square).innerHTML = event.target.id
      // arguments that need to be passed to the updateGame method
      const { user } = this.props
      const { game } = this.state
      const num = /\d+/
      const index = square.match(num)[0]
      const value = event.target.id

      // representation of how the board will be updated
      const updatedBoard = [...this.state.board]
      updatedBoard[index] = value

      // invoking the checkForWin method to store the accurate "over" value
      const over = checkForWin(updatedBoard)
      updateGame(user, game, index, value, over)
        .then((res) => {
          console.log(res)
          this.setState({
            game: res.data,
            board: res.data.cells,
            over: over
          })
        })
        .catch(error => console.error(error))
    }
  }

  clearSquare = (event, square, pencilOn) => {
    const pencilCells = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    const { user } = this.props
    const { game } = this.state
    const num = /\d+/
    const index = square.match(num)[0]

    if (pencilOn === true) {
      pencilCells.forEach(e => {
        document.getElementById(`${square}-${e}`).innerHTML = ''
        document.getElementById(square).innerHTML = ''
        updateGame(user, game, index, '', false)
          .then((res) => {
            console.log(res)
            this.setState({
              game: res.data,
              board: res.data.cells,
              over: false
            })
          })
      })
    } else {
      document.getElementById(square).innerHTML = ''
      updateGame(user, game, index, '', false)
        .then((res) => {
          console.log(res)
          this.setState({
            game: res.data,
            board: res.data.cells,
            over: false
          })
        })
        .catch(error => console.error(error))
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
    return (
      <Fragment>
        <div className="game-container">
          <div className="board">
            {this.state.board.map((value, index) => (
              <Square key={index} handleSquare={this.handleSquare} clearSquare={this.clearSquare} squareID={'square-' + index} index={index} over={this.state.over}/>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Game
