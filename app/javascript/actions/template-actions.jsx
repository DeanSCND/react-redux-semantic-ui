import { client } from './';

const url = '/templates';

export function fetchTemplates(){
  console.log("Fetching Templates")
  return dispatch => {
    dispatch({
      type: 'FETCH_TEMPLATES',
      payload: client.get(url)
    })
  }
}