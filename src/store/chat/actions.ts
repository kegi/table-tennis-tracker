import { Message, SEND_MESSAGE, DELETE_MESSAGE } from './types'

export const sendMessage = (message: Message) => {
  return {
    type: SEND_MESSAGE,
    payload: message
  }
}

export const deleteMessage = (timestamp: number) => {
  return {
    type: DELETE_MESSAGE,
    meta: {
      timestamp
    }
  }
}
