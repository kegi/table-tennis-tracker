import {
  ChatState,
  ChatActionTypes,
  SEND_MESSAGE,
  DELETE_MESSAGE
} from './types'

const initialState: ChatState = {
  messages: []
}

export default (
  state: ChatState = initialState,
  action: ChatActionTypes
): ChatState => {
  switch (action.type) {
    /* send message */

    case SEND_MESSAGE: {
      return {
        messages: [
          ...state.messages,
          action.payload
        ]
      }
    }

    /* delete message */

    case DELETE_MESSAGE: {
      return {
        messages: state.messages.filter((message) => {
          return message.timestamp !== action.meta.timestamp
        })
      }
    }

    default:
      return state
  }
}
