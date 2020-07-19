import React, { Component, Fragment } from 'react'

import Board from '../Board/Board'
import Controller from '../Controller/Controller'
import { newGame } from '../../api/game'

class Game extends Component {
  constructor () {
    super()
    this.state = {
      board: null,
      over: false,
      pencilMode: false,
      eraser: false
    }
  }

  pencilOn = () => this.setState({ pencilMode: true })
  pencilOff = () => this.setState({ pencilMode: false })

  eraserOn = () => this.setState({ eraser: true })
  eraserOff = () => this.setState({ eraser: false })

  handleClick = (event) => {
    console.log(event.target.id)
  }

  async componentDidMount () {
    const { user } = this.props
    try {
      newGame(user)
        .then(res => {
          this.setState({ board: res.data.cells, over: res.data.over })
        })
        .catch(error => console.error(error))
    } catch (error) {
      console.error('errorrr!')
    }
  }

  render () {
    return (
      <Fragment>
        <Board onClick={this.handleClick}/>
        <Controller />
      </Fragment>
    )
  }
}

export default Game
