import axios from 'axios'

import { GET_QUESTIONS, FIND_QUESTION } from './types'
import { getTop, getBottom } from '../utils/customSort'

export const getQuestions = (sortTop) => async dispatch => {
  const res = await axios.get('https://api.stackexchange.com/2.2/questions?pagesize=10&order=desc&sort=votes&site=stackoverflow')
  if (sortTop) {
    dispatch({
      type: GET_QUESTIONS,
      payload: res.data.items.sort(getTop)
    })
  } else {
    dispatch({
      type: GET_QUESTIONS,
      payload: res.data.items.sort(getBottom)
    })
  }
}

export const findQuestion = (questionId) => dispatch => {
  dispatch({
    type: FIND_QUESTION,
    payload: questionId
  })
}

