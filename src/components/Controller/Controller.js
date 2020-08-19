import React, { Fragment } from 'react'

const Controller = (props) => {
  const { handleInput, handleClear, handlePencil, pencilMode } = props
  return (
    <Fragment>
      {console.log(`current pencil mode: ${pencilMode}`)}
      <div className="controller">
        <div onClick={handleInput} id="1" className="controller-input">1</div>
        <div onClick={handleInput} id="2" className="controller-input">2</div>
        <div onClick={handleInput} id="3" className="controller-input">3</div>
        <div onClick={handleInput} id="4" className="controller-input">4</div>
        <div onClick={handleInput} id="5" className="controller-input">5</div>
        <div onClick={handleInput} id="6" className="controller-input">6</div>
        <div onClick={handleInput} id="7" className="controller-input">7</div>
        <div onClick={handleInput} id="8" className="controller-input">8</div>
        <div onClick={handleInput} id="9" className="controller-input">9</div>
        <div onClick={handlePencil} className="controller-input">(Note)</div>
        <div onClick={handleClear} className="controller-input">(Clear)</div>
      </div>
    </Fragment>
  )
}

export default Controller
