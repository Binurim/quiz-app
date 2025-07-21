import { useContext, useEffect } from 'react';
import Question from './Question';
import 'bootstrap/dist/css/bootstrap.min.css';
import { QuizContext } from '../context/QuizContext';

const Quiz = () => {
  const [quizState, dispatch] = useContext(QuizContext);

  useEffect(() => {
    if (quizState.questions.length > 0 || quizState.error) {
        return;
    }

    const apiUrl = "https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple";
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: 'LOADED_QUESTIONS', payload: data.results });
      }).catch(err => {
        dispatch({ type: 'SERVER_ERROR', payload: err.message});
      });
  });

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
          {quizState.error && (
          <div className="results">
            <div>Server error</div>
            <div>{quizState.error}</div>
          </div>
        )}
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

        {!quizState.showResults && quizState.questions.length > 0 && (
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
