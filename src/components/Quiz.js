import { useContext } from 'react';
import Question from './Question';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QuizContext } from '../context/QuizContext';

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  const handleNextQuestion = () => {
    dispatch({ type: 'NEXT_QUESTION' });
  };

//   const handlePreviousQuestion = () => {
//     if (quizState.currentQuetionIndex > 0) {
//       dispatch({ type: 'PREVIOUS_QUESTION' });
//     }
//   };

  return (
    <div>
      <div className="quiz">
        {quizState.showResults && (
          <div className="results">
            <div className="congratulations">Congratulations</div>
            <div className="results-info">
              <div>You have completed the quiz</div>
              <div>You've got {quizState.correctAnswerCount} of {quizState.questions.length}</div>
            </div>
            <button
              className="next-button"
              type="button"
              onClick={() => dispatch({ type: 'RESTART' })}
            >
              Restart
            </button>
          </div>
        )}

        {!quizState.showResults && (
          <div>
            <div className="score">
              Question {quizState.currentQuetionIndex + 1}/
              {quizState.questions.length}
            </div>
            {quizState.questions.length > 0 && <Question />}
            <div className="row">
              {/* <button
                className="next-button"
                type="button"
                onClick={handlePreviousQuestion}
                disabled={
                  quizState.currentQuetionIndex === 0 ||
                  quizState.currentQuetionIndex > quizState.questions.length - 1
                }
              >
                Previous Question
              </button> */}
              <button
                className="next-button"
                type="button"
                onClick={handleNextQuestion}
                // disabled={
                //   quizState.currentQuetionIndex ===
                //   quizState.questions.length - 1
                // }
              >
                Next Question
              </button>
              {/* <button
                className="next-button"
                type="button"
                onClick={() => dispatch({ type: 'SUBMIT' })}
                disabled={
                  quizState.currentQuetionIndex !==
                  quizState.questions.length - 1
                }
              >
                Submit
              </button> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
