const defaultState = {
  templates: []
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_TEMPLATES_FULFILLED': {
      console.log("Got some templates")
      return {
        ...state,
        templates: action.payload.data.data || action.payload.data // in case pagination is disabled
      }
    }
    default:
      return state;
  }
}