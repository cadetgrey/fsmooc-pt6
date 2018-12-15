const initialFilter = ''

const reducer = (state = initialFilter, action) => {
  switch (action.type) {
    case 'UPDATE_FILTER':
      return action.data.string
    default:
      return ''
  }
}

export const actionFor = {
  updatingFilter(string) {
    return {
      type: 'UPDATE_FILTER',
      data: {
        string: string
      }
    }
  }
}

export default reducer