import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

import Controller from '../Controller/Controller'

// import Button from 'react-bootstrap/Button'
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
    const { index, squareID } = this.props
    const { pencilMode, show } = this.state

    const squareClasses = (i) => {
      // main corners
      if (i === 0) {
        return 'corner-1'
      }

      if (i === 8) {
        return 'corner-2'
      }

      if (i === 72) {
        return 'corner-3'
      }

      if (i === 80) {
        return 'corner-4'
      }

      const rowOneLeft = [3, 6]
      if (rowOneLeft.includes(i)) {
        return 'row-1-left-square'
      }
      const rowOneMiddle = [1, 4, 7]
      if (rowOneMiddle.includes(i)) {
        return 'row-1-middle-square'
      }
      const rowOneRight = [2, 5]
      if (rowOneRight.includes(i)) {
        return 'row-1-right-square'
      }

      const columnOneMiddles = [9, 36, 63]
      if (columnOneMiddles.includes(i)) {
        return 'column-1-middle-square'
      }

      const columnOneTops = [27, 54]
      if (columnOneTops.includes(i)) {
        return 'column-1-top-square'
      }

      const columnOneBottoms = [18, 45]
      if (columnOneBottoms.includes(i)) {
        return 'column-1-bottom-square'
      }

      const columnTwoTops = [28, 55]
      if (columnTwoTops.includes(i)) {
        return 'column-2-top-square'
      }

      const columnTwoBottoms = [19, 46]
      if (columnTwoBottoms.includes(i)) {
        return 'column-2-bottom-square'
      }

      const columnThreeMiddles = [38, 65]
      if (columnThreeMiddles.includes(i)) {
        return 'column-3-middle-square'
      }

      const columnThreeTops = [29, 56]
      if (columnThreeTops.includes(i)) {
        return 'column-3-top-square'
      }

      const columnThreeBottoms = [20, 47]
      if (columnThreeBottoms.includes(i)) {
        return 'column-3-bottom-square'
      }

      const columnFourMiddles = [39, 66]
      if (columnFourMiddles.includes(i)) {
        return 'column-4-middle-square'
      }

      const columnFourTops = [30, 57]
      if (columnFourTops.includes(i)) {
        return 'column-4-top-square'
      }

      const columnFourBottoms = [21, 48]
      if (columnFourBottoms.includes(i)) {
        return 'column-4-bottom-square'
      }

      const columnFiveTops = [31, 58]
      if (columnFiveTops.includes(i)) {
        return 'column-5-top-square'
      }

      const columnFiveBottoms = [22, 49]
      if (columnFiveBottoms.includes(i)) {
        return 'column-5-bottom-square'
      }

      const columnSixMiddles = [41, 68]
      if (columnSixMiddles.includes(i)) {
        return 'column-6-middle-square'
      }

      const columnSixTops = [32, 59]
      if (columnSixTops.includes(i)) {
        return 'column-6-top-square'
      }

      const columnSixBottoms = [23, 50]
      if (columnSixBottoms.includes(i)) {
        return 'column-6-bottom-square'
      }

      const columnSevenMiddles = [42, 69]
      if (columnSevenMiddles.includes(i)) {
        return 'column-7-middle-square'
      }

      const columnSevenTops = [33, 60]
      if (columnSevenTops.includes(i)) {
        return 'column-7-top-square'
      }

      const columnSevenBottoms = [24, 51]
      if (columnSevenBottoms.includes(i)) {
        return 'column-7-bottom-square'
      }

      const columnEightTops = [34, 61]
      if (columnEightTops.includes(i)) {
        return 'column-8-top-square'
      }

      const columnEightBottoms = [25, 52]
      if (columnEightBottoms.includes(i)) {
        return 'column-8-bottom-square'
      }

      const columnNineMiddles = [17, 44, 71]
      if (columnNineMiddles.includes(i)) {
        return 'column-9-middle-square'
      }

      const columnNineTops = [35, 62]
      if (columnNineTops.includes(i)) {
        return 'column-9-top-square'
      }

      const columnNineBottoms = [26, 53]
      if (columnNineBottoms.includes(i)) {
        return 'column-9-bottom-square'
      }

      const rowTwoLeft = [12, 15]
      if (rowTwoLeft.includes(i)) {
        return 'row-2-left-square'
      }
      const rowTwoRight = [11, 14]
      if (rowTwoRight.includes(i)) {
        return 'row-2-right-square'
      }

      const rowNineLeft = [75, 78]
      if (rowNineLeft.includes(i)) {
        return 'row-9-left-square'
      }
      const rowNineMiddle = [73, 76, 79]
      if (rowNineMiddle.includes(i)) {
        return 'row-9-middle-square'
      }
      const rowNineRight = [74, 77]
      if (rowNineRight.includes(i)) {
        return 'row-9-right-square'
      }

      return 'square-container'
    }

    const squareClass = squareClasses(index)

    return (
      <Fragment>

        <div onClick={this.showModal} id={squareID} className={pencilMode ? 'hide-input' : `${squareClass} square-input`}>
        </div>
        <div className={pencilMode ? `${squareClass}` : 'hide-notes'}>
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
          <Modal.Body className="controller-container">
            <Controller handleInput={this.handleInput} handleClear={this.handleClear} handlePencil={this.handlePencil} pencilMode={pencilMode}/>
          </Modal.Body>
          <Modal.Footer className="controller-footer">
            <button onClick={this.hideModal} className="close-controller">Close</button>
          </Modal.Footer>
        </Modal>
      </Fragment>
    )
  }
}

export default withRouter(Square)
