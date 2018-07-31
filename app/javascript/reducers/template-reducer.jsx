const defaultState = {
  templates: []
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_TEMPLATES_FULFILLED': {
      return {
        ...state,
        templates: action.payload.data.data || action.payload.data // in case pagination is disabled
      }
    }
    case 'NEW_TEMPLATE': {
      return {
        ...state,
        template: {name:{}, channel: "email"}
      }
    }

    case 'SAVE_TEMPLATE_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'SAVE_TEMPLATE_FULFILLED': {
      return {
        ...state,
        templates: [...state.templates, action.payload.data],
        errors: {},
        loading: false
      }
    }

    case 'SAVE_TEMPLATE_REJECTED': {
      const data = action.payload.response.data;
      // convert feathers error formatting to match client-side error formatting
      const { "name":name, "channel":template_id, "text": text} = data.errors;
      const errors = { global: data.template, name, channel, text };
      return {
        ...state,
        errors: errors,
        loading: false
      }
    }    
    default:
      return state;
  }
}