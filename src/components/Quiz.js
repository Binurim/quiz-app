import { useState, useEffect } from 'react';
import Question from './Question';
import 'bootstrap/dist/css/bootstrap.min.css';


const Quiz = ({questionsData}) => {

const [currentQuetionIndex, setCurrentQuetionIndex] = useState(0);    
const [questions, setQuestions] = useState([]);     


useEffect(() => {
  setQuestions(questionsData);
}, [questionsData]);

const handleNextQuestion = () => {
  setCurrentQuetionIndex(currentQuetionIndex + 1);
};

const handlePreviousQuestion = () => {
  if (currentQuetionIndex > 0) {
    setCurrentQuetionIndex(currentQuetionIndex - 1);
  }
};

  return (
    <div>
      <div className="quiz">
        <div className="score">
          Question {currentQuetionIndex +1}/{questions.length}
        </div>
        {questions.length > 0 && questions[currentQuetionIndex] && (

        <Question questionD={questions[currentQuetionIndex]}/>
        )}
        <div className="row">
          <button
            className="next-button"
            type="button"
            onClick={handlePreviousQuestion}
            disabled={
              currentQuetionIndex === 0 ||
              currentQuetionIndex > questions.length -1
            }
          >
            Previous Question
          </button>
          <button
            className="next-button"
            type="button"
            onClick={handleNextQuestion}
            disabled={currentQuetionIndex === questions.length -1}
          >
            Next Question
          </button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;