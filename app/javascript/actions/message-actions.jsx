import { client } from './';

const url = '/messages';

export function fetchMessages(){
  return dispatch => {
    dispatch({
      type: 'FETCH_MESSAGES',
      payload: client.get(url)
    })
  }
}