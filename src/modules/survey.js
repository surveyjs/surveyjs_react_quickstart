export const SET_DATA = 'survey/SET_DATA'
export const SET_COMPLETE_FLAG = 'survey/SET_COMPLETE_FLAG'

const initialState = {
  data: {},
  isComplete: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload
      }

    case SET_COMPLETE_FLAG:
      return {
        ...state,
        isComplete: action.payload
      }

    default:
      return state
  }
}

export const setData = (data) => {
  return dispatch => {
    dispatch({
      type: SET_DATA,
      payload: data
    })
  }
}

export const setCompleteFlag = (isComplete) => {
  return dispatch => {
    dispatch({
      type: SET_COMPLETE_FLAG,
      payload: isComplete
    })
  }
}