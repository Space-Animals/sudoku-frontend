import React, { Component, Fragment } from 'react'
import Row from 'react-bootstrap/Row'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

import Square from '../Square/Square'

import { indexGames, updateGame } from '../../api/game'
import { levels } from '../../levels/level.js'
import { checkForWin } from '../../helpers/helperFunctions'

class ContinueGame extends Component {
  constructor () {
    super()

    this.state = {
      game: null,
      board: null,
      over: null,
      completedGames: 0,
      isLoading: true,
      show: false
    }
  }

  async componentDidMount () {
    try {
      const { user } = this.props
      const response = await indexGames(user)
      const allGames = response.data
      const currentGame = allGames.filter((e) => e.over === false)[0]
      setTimeout(() => {
        this.setState({
          game: currentGame,
          board: currentGame.cells,
          over: currentGame.over,
          isLoading: false
        })

        this.setState({
          completedGames: allGames.filter(e => e.over === true).length
        })

        if (this.state.game) {
          this.state.board.forEach((v, i) => {
            document.getElementById(`square-${i}`).innerHTML = v
          })
        }
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
          this.setState({
            game: res.data,
            board: res.data.cells,
            over: over
          })
        })
        .catch(error => console.error(error))

      if (over) {
        this.setState({
          show: true
        })
      }
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
          <h3>..is Loading</h3>
          <div className="loading-animation">
          </div>
        </Fragment>
      )
    }

    const { completedGames, show } = this.state
    const level = levels[completedGames + 1]

    return (
      <Fragment>
        <Row className="game-container">
          <div className="board">
            {this.state.board.map((value, index) => (
              <Square key={index} fixedSquare={level[index][1]} handleSquare={this.handleSquare} clearSquare={this.clearSquare} squareID={'square-' + index} index={index} over={this.state.over}/>
            ))}
          </div>
          <div className="yoshi">
          </div>
          <div className="baby-bowser">
          </div>
        </Row>
        <Modal
          show={show}
          backdrop="static"
          className="winner-modal"
          keyboard={false}
        >
          <Modal.Header className="winner-modal" closeButton>
            <Modal.Title>YOU WIN!!!</Modal.Title>
          </Modal.Header>
          <Modal.Body className="winner-modal">
            <div className="yoshi-groundpound">
            </div>
          </Modal.Body>
          <Modal.Footer className="winner-modal">
            <Button href="#/" variant="success">
              Home
            </Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    )
  }
}

export default ContinueGame
