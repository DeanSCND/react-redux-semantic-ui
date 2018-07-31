const defaultState = {
  messages: [],
  message: {name:{}},
  loading: false,
  errors: {}
}

export default (state=defaultState, action={}) => {
  switch (action.type) {
    case 'FETCH_MESSAGES_FULFILLED': {
      return {
        ...state,
        messages: action.payload.data.data || action.payload.data // in case pagination is disabled
      }
    }
    case 'NEW_MESSAGE': {
      return {
        ...state,
        message: {name:{}}
      }
    }

    case 'SAVE_MESSAGE_PENDING': {
      return {
        ...state,
        loading: true
      }
    }

    case 'SAVE_MESSAGE_FULFILLED': {
      return {
        ...state,
        messages: [...state.messages, action.payload.data],
        errors: {},
        loading: false
      }
    }

    case 'SAVE_MESSAGE_REJECTED': {
      const data = action.payload.response.data;
      // convert feathers error formatting to match client-side error formatting
      const { "name":name, "template_id":template_id } = data.errors;
      const errors = { global: data.message, name, message_id };
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