import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'

class Square extends Component {
  constructor () {
    super()

    this.state = {
      // pencilMode: null
    }
  }

  render () {
    const { handleSquare, pencilOn, squareID } = this.props
    return (
      <Fragment>
        <div onClick={handleSquare} id={squareID} className={pencilOn ? 'square-container hide-input' : 'square-container'}>
        </div>
        <div className={pencilOn ? 'square-container' : 'square-container hide-notes'}>
          <div id={`${squareID}-0`} className={`pencil-cells ${squareID}-notes`}></div>
          <div id={`${squareID}-1`} className={`pencil-cells ${squareID}-notes`}></div>
          <div id={`${squareID}-2`} className={`pencil-cells ${squareID}-notes`}></div>
          <div id={`${squareID}-3`} className={`pencil-cells ${squareID}-notes`}></div>
          <div id={`${squareID}-4`} className={`pencil-cells ${squareID}-notes`}></div>
          <div id={`${squareID}-5`} className={`pencil-cells ${squareID}-notes`}></div>
          <div id={`${squareID}-6`} className={`pencil-cells ${squareID}-notes`}></div>
          <div id={`${squareID}-7`} className={`pencil-cells ${squareID}-notes`}></div>
          <div id={`${squareID}-8`} className={`pencil-cells ${squareID}-notes`}></div>
        </div>
      </Fragment>
    )
  }
}

// <div className="outer-cell">
//   <div id={index} className="hide-input"></div>
//   <div id={`cells-${index}-0`} className="hide-notes"></div>
//   <div id={`cells-${index}-1`} className="hide-notes"></div>
//   <div id={`cells-${index}-2`} className="hide-notes"></div>
//   <div id={`cells-${index}-3`} className="hide-notes"></div>
//   <div id={`cells-${index}-4`} className="hide-notes"></div>
//   <div id={`cells-${index}-5`} className="hide-notes"></div>
//   <div id={`cells-${index}-6`} className="hide-notes"></div>
//   <div id={`cells-${index}-7`} className="hide-notes"></div>
//   <div id={`cells-${index}-8`} className="hide-notes"></div>
// </div>

export default withRouter(Square)
