import React, { Fragment } from 'react'
import Button from 'react-bootstrap/Button'

// onClick={this.props.pencilMode}
// onClick={this.props.erase}

const Controller = (props) => {
  return (
    <Fragment>
      <Button className='btn btn-primary' >Pencil</Button>
      <Button className='btn btn-primary' >Delete</Button>

    </Fragment>
  )
}

export default Controller
