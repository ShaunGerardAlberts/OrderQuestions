import { GET_QUESTIONS, FIND_QUESTION } from '../actions/types'

const initialState = {
  questions: [],
  foundQuestion: {}
}


export default function (state = initialState, action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      }
    case FIND_QUESTION:
      return {
        ...state,
        foundQuestion: state.questions.find(question => {
          if (question.question_id === action.payload) return question
        })
      }
    default:
      return state
  }
}