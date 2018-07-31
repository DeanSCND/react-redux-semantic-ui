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

export function newMessage() {
  return dispatch => {
    dispatch({
      type: 'NEW_MESSAGE'
    })
  }
}

export function saveMessage(message) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_MESSAGE',
      payload: client.post(url, message)
    })
  }
}

export function fetchMessage(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_MESSAGE',
      payload: client.get(`${url}/${_id}`)
    })
  }
}

export function updateMessage(message) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_MESSAGE',
      payload: client.put(`${url}/${message._id}`, message)
    })
  }
}