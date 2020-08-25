import apiUrl from '../apiConfig'
import axios from 'axios'

export const newGame = (user) => {
  return axios({
    url: `${apiUrl}/games/`,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${user.token}`
    },
    data: '{}'
  })
}

export const updateGame = (user, game, index, value, over) => {
  return axios({
    url: `${apiUrl}/games/${game.id}/`,
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${user.token}`
    },
    data: {
      'cell': {
        'index': index,
        'value': value
      },
      'over': over
    }
  })
}

export const showGame = (user, game) => {
  return axios({
    url: `${apiUrl}/games/${game.id}/`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${user.token}`
    }
  })
}

export const indexGames = (user) => {
  return axios({
    url: `${apiUrl}/games/`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${user.token}`
    }
  })
}
