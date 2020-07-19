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
