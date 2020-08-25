import React, { Component, Fragment } from 'react'

import { indexGames } from '../../api/game'

class IndexGames extends Component {
  constructor () {
    super()

    this.state = {
    }
  }

  async componentDidMount () {
    const { user } = this.props

    indexGames(user)
      .then((res) => {
        console.log('number of total games: ' + res.data.length)
        console.log('number of completed games: ' + res.data.filter(e => e.over === true).length)
      })
      .catch((error) => console.error(error))
  }

  render () {
    return (
      <Fragment>
        {console.log('hello :D')}
      </Fragment>
    )
  }
}

export default IndexGames
