import { client } from './';

const url = '/templates';

export function fetchTemplates(){
  return dispatch => {
    dispatch({
      type: 'FETCH_TEMPLATES',
      payload: client.get(url)
    })
  }
}