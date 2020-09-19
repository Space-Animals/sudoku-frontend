import React, { Fragment } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Row from 'react-bootstrap/Row'

const HowToPlay = () => {
  return (
    <Fragment>
      <Row className="home-options-container">
        <Jumbotron className="home-options-screen col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="how-to-play col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <div className="how-to-play">
              <h3>How to Play!</h3>
              <p>Sudoku is played on a grid of 9 x 9 spaces. Within the rows and columns are 9 “squares” (made up of 3 x 3 spaces). Each row, column and square (9 spaces each) needs to be filled out with the numbers 1-9, without repeating any numbers within the row, column or square.</p>
            </div>
            <div className="how-to-play">
              <h3>Controls</h3>
              <p>Click on any square on the sudoku board and a transparent controller will appear! You`&#39;`ll be able to populate the square with whichever number you select.  You can also select the pencil icon to notate the square instead.  Lastly there is a eraser icon you can use to clear the square. Happy Solving!</p>
            </div>
          </div>
        </Jumbotron>
      </Row>
    </Fragment>
  )
}

export default HowToPlay
