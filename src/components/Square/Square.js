import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import Controller from '../Controller/Controller'

import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'

class Square extends Component {
  constructor () {
    super()

    this.state = {
      pencilMode: false,
      show: false
    }
  }

  handleInput = (event) => {
    const { handleSquare, squareID } = this.props
    const { pencilMode } = this.state
    handleSquare(event, squareID, pencilMode)
    this.setState({ show: false })
  }

  handleClear = (event) => {
    const { clearSquare, squareID } = this.props
    const { pencilMode } = this.state
    clearSquare(event, squareID, pencilMode)
    this.setState({ pencilMode: false })
  }

  handlePencil = () => {
    const prevState = this.state.pencilMode
    this.setState({ pencilMode: !prevState })
  }

  showModal = () => {
    const { over } = this.props
    if (over) {
      return
    }
    this.setState({ show: true })
  }

  hideModal = () => {
    this.setState({ show: false })
  }

  render () {
    const { squareID } = this.props
    const { pencilMode, show } = this.state
    return (
      <Fragment>
        <div onClick={this.showModal} id={squareID} className={pencilMode ? 'square-container hide-input' : 'square-container square-input'}>
        </div>
        <div className={pencilMode ? 'square-container' : 'square-container hide-notes'}>
          <div onClick={this.showModal} id={`${squareID}-0`} className={`pencil-cells ${squareID}-notes`}></div>
          <div onClick={this.showModal} id={`${squareID}-1`} className={`pencil-cells ${squareID}-notes`}></div>
          <div onClick={this.showModal} id={`${squareID}-2`} className={`pencil-cells ${squareID}-notes`}></div>
          <div onClick={this.showModal} id={`${squareID}-3`} className={`pencil-cells ${squareID}-notes`}></div>
          <div onClick={this.showModal} id={`${squareID}-4`} className={`pencil-cells ${squareID}-notes`}></div>
          <div onClick={this.showModal} id={`${squareID}-5`} className={`pencil-cells ${squareID}-notes`}></div>
          <div onClick={this.showModal} id={`${squareID}-6`} className={`pencil-cells ${squareID}-notes`}></div>
          <div onClick={this.showModal} id={`${squareID}-7`} className={`pencil-cells ${squareID}-notes`}></div>
          <div onClick={this.showModal} id={`${squareID}-8`} className={`pencil-cells ${squareID}-notes`}></div>
        </div>
        <Modal
          size="sm"
          show={show}
          aria-labelledby="contained-modal-sizes-title-sm"
          onHide={this.hideModal}
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-sizes-title-sm">
              Choose Input Type, Then Value
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="controller-container">
            <Controller handleInput={this.handleInput} handleClear={this.handleClear} handlePencil={this.handlePencil} pencilMode={pencilMode}/>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal} className="btn btn-danger">Close</Button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    )
  }
}

export default withRouter(Square)
