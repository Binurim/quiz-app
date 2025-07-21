import { createContext, useReducer } from 'react';
// import data from '../data';
import { normalizeQuestions, shuffleAnswers } from '../helpers';

const initialState = {
  currentQuetionIndex: 0,
  questions: [],
  // questions: [data]
  showResults: false,
  answers: [],
  currentAnswer: '',
  correctAnswerCount: 0,
  error: null
};

const reducer = (state, action) => {
    switch (action.type) {
      case 'LOADED_QUESTIONS': {
        const normalizeQuestionsArr = normalizeQuestions(action.payload);
        return {
          ...state,
          questions: normalizeQuestionsArr,
          answers: shuffleAnswers(normalizeQuestionsArr[0]),
        };
      }
      case 'NEXT_QUESTION': {
        const showResults =
          state.currentQuetionIndex === state.questions.length - 1;
        const currentQuetionIndex = showResults
          ? state.currentQuetionIndex
          : state.currentQuetionIndex + 1;
        const answers = showResults
          ? []
          : shuffleAnswers(state.questions[currentQuetionIndex]);
        return {
          ...state,
          currentQuetionIndex,
          showResults,
          answers,
          currentAnswer: '',
        };
      }
      case 'PREVIOUS_QUESTION': {
        return { ...state, currentQuetionIndex: state.currentQuetionIndex - 1 };
      }
      case 'RESTART': {
        return initialState;
      }
      case 'SUBMIT': {
        return { ...state, showResults: true };
      }
      case 'SELECT_ANSWER': {
        const correctAnswerCount =
          action.payload ===
          state.questions[state.currentQuetionIndex].correctAnswer
            ? state.correctAnswerCount + 1
            : state.correctAnswerCount;
        return { ...state, currentAnswer: action.payload, correctAnswerCount };
      }
      case 'SERVER_ERROR': {
        return { ...state, error: action.payload };
      }
      default: {
        return state;
      }
    }
};

export const QuizContext = createContext();

export const QuizProvider = ({ children }) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  const value = useReducer(reducer, initialState);

  return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
};
