import React, { Fragment } from 'react'

const Controller = (props) => {
  const { handleInput, clear, handlePencil } = props
  return (
    <Fragment>
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
        <div onClick={handlePencil} id="pencil-mode" className="controller-input">(Pencil)</div>
        <div className="controller-input"></div>
        <div onClick={clear} id="clear" className="controller-input">(Clear)</div>
      </div>
    </Fragment>
  )
}

export default Controller
