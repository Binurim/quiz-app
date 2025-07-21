import { createContext, useReducer } from 'react';
// import data from '../data';
import questions from '../data';

const initialState = {
  currentQuetionIndex: 0,
  questions,
  // questions: [data]
  showResults: false,
};

const reducer = (state, action) => {
  if (action.type === 'NEXT_QUESTION') {
    const showResults = state.currentQuetionIndex === state.questions.length - 1;
    const currentQuetionIndex = showResults ? state.currentQuetionIndex : state.currentQuetionIndex + 1;

    return { ...state, currentQuetionIndex, showResults };
  } else if (action.type === 'PREVIOUS_QUESTION') {
    return { ...state, currentQuetionIndex: state.currentQuetionIndex - 1 };
  } else if (action.type === 'RESTART') {
    return initialState;
  } else if (action.type === 'SUBMIT') {
    return { ...state, showResults: true };
  }
  return state;
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const value = useReducer(reducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
