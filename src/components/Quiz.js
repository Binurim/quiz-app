import { useState, useEffect, useReducer } from 'react';
import Question from './Question';
import 'bootstrap/dist/css/bootstrap.min.css';


const initialState = {
    currentQuetionIndex: 0,
    questions: []
};

const reducer = (state, action) => {
    if (action.type === 'NEXT_QUESTION') {
        return { ...state, currentQuetionIndex: state.currentQuetionIndex + 1 };
    } else if (action.type === 'PREVIOUS_QUESTION') {
        return { ...state, currentQuetionIndex: state.currentQuetionIndex - 1 };
    }
    return state;
}

const Quiz = ({questionsData}) => {

const [state, dispatch] = useReducer(reducer, initialState); 
const [currentQuetionIndex, setCurrentQuetionIndex] = useState(0);

const handleNextQuestion = () => {
  dispatch({type: 'NEXT_QUESTION'});
};

const handlePreviousQuestion = () => {
  if (currentQuetionIndex > 0) {
    dispatch({type: 'PREVIOUS_QUESTION'});
  }
};

  return (
    <div>
      <div className="quiz">
        <div className="score">
          Question {currentQuetionIndex +1}/{state.questions.length}
        </div>
        {state.questions.length > 0 && state.questions[currentQuetionIndex] && (

        <Question questionD={state.questions[currentQuetionIndex]}/>
        )}
        <div className="row">
          <button
            className="next-button"
            type="button"
            onClick={handlePreviousQuestion}
            disabled={
              currentQuetionIndex === 0 ||
              currentQuetionIndex > state.questions.length -1
            }
          >
            Previous Question
          </button>
          <button
            className="next-button"
            type="button"
            onClick={handleNextQuestion}
            disabled={currentQuetionIndex === state.questions.length -1}
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;