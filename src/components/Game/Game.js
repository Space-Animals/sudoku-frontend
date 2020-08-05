import React, { Component, Fragment } from 'react'

// import Board from '../Board/Board'
import Controller from '../Controller/Controller'
import Square from '../Square/Square'
import { newGame } from '../../api/game'

class Game extends Component {
  constructor () {
    super()
    this.state = {
      board: null,
      input: null,
      isLoading: true,
      over: false,
      pencilOn: false,
      square: null
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
      // console.error(error)
      console.error('error')
    }
  }

  handlePencil = () => {
    const prevState = this.state.pencilOn
    console.log('previous pencil state is ' + prevState)
    this.setState({ pencilOn: !prevState })
    console.log('new pencil state is ' + !prevState)
  }

  Clear = () => {
    const square = this.state.square
    const pencilCells = [0, 1, 2, 3, 4, 5, 6, 7, 8]
    if (this.state.pencilOn === true) {
      pencilCells.forEach(e => {
        document.getElementById(`${square}-${e}`).innerHTML = ''
      })
    } else {
      // document.getElementById(`${square}-${event.target.id}`).innerHTML = ''
      document.getElementById(square).innerHTML = ''
    }
  }

  handleInput = (event) => {
    const square = this.state.square
    if (this.state.pencilOn === true) {
      document.getElementById(`${square}-${event.target.id - 1}`).innerHTML = event.target.id
    } else {
      document.getElementById(square).innerHTML = event.target.id
    }
  }

  handleSquare = (event) => {
    console.log('success!')
    console.log(event.target.id)
    this.setState({ square: event.target.id })
  }

  render () {
    const { board, over, square, pencilOn } = this.state
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
          <Controller square={square} clear={this.Clear} handleInput={this.handleInput} handlePencil={this.handlePencil}/>
          <div className="board">
            {this.state.board.map((value, index) => (
              <Square key={index} squareID={'square-' + index} value={value} handleSquare={this.handleSquare} pencilOn={pencilOn}/>
            ))}
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Game
