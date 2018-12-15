const initialNotification = ''

const reducer = (state = initialNotification, action) => {
  switch (action.type) {
    case 'NEW_NOTIFICATION':
      return action.data.message
    case 'HIDE_NOTIFICATION':
      return ''
    default:
      return state
  }
}

export const actionFor = {
  settingNotification(message) {
    return {
      type: 'NEW_NOTIFICATION',
      data: {
        message: message
      }
    }
  },
  hidingNotification() {
    return {
      type: 'HIDE_NOTIFICATION'
    }
  }
}

export default reducer