import React, { Fragment } from 'react'

const Square = () => (
  <Fragment>
    <div className="outer-cell">
      <div id="0" className="pencil-cell hide-notes"></div>
      <div id="1" className="pencil-cell hide-notes"></div>
      <div id="2" className="pencil-cell hide-notes"></div>
      <div id="3" className="pencil-cell hide-notes"></div>
      <div id="4" className="pencil-cell hide-notes"></div>
      <div id="5" className="pencil-cell hide-notes"></div>
      <div id="6" className="pencil-cell hide-notes"></div>
      <div id="7" className="pencil-cell hide-notes"></div>
      <div id="8" className="pencil-cell hide-notes"></div>
    </div>
  </Fragment>
)

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

export default Square
