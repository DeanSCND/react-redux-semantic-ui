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

export function newTemplate() {
  return dispatch => {
    dispatch({
      type: 'NEW_TEMPLATE'
    })
  }
}

export function saveTemplate(template) {
  console.log("POSTING: " + JSON.stringify(template))

  return dispatch => {
    return dispatch({
      type: 'SAVE_TEMPLATE',
      payload: client.post(url, template)
    })
  }
}