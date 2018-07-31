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
        message: {}
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

    case 'FETCH_MESSAGE_PENDING': {
      return {
        ...state,
        loading: true,
        message: {name:""}
      }
    }

    case 'FETCH_MESSAGE_FULFILLED': {
      return {
        ...state,
        message: action.payload.data,
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_MESSAGE_PENDING': {
      return {
        ...state,
        loading: true
      }
    } 

    case 'UPDATE_MESSAGE_FULFILLED': {
      const message = action.payload.data;
      return {
        ...state,
        messages: state.message.map(item => item._id === message._id ? message : item),
        errors: {},
        loading: false
      }
    }

    case 'UPDATE_MESSAGE_REJECTED': {
      const data = action.payload.response.data;
      const { name, template_id } = data.errors;
      const errors = { global: data.message, name, template_id };
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