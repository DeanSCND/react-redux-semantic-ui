const defaultState = {
  templates: []
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_TEMPLATE_FULFILLED': {
      return {
        ...state,
        messages: action.payload.data.data || action.payload.data // in case pagination is disabled
      }
    }
    default:
      return state;
  }
}