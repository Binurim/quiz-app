import { useState, useMemo, useContext, useEffect } from 'react';
import { QuizContext } from '../context/QuizContext';

const Answer = () => {
  const answerLetter = ['A', 'B', 'C', 'D'];

  const [showAnswers, setShowAnswers] = useState(false);
  const [quizState] = useContext(QuizContext);

  const allAnswers = useMemo(() => {
    const currentQuestion = quizState.questions[quizState.currentQuetionIndex];
    const combined = [...currentQuestion.incorrectAnswers, currentQuestion.correctAnswer];
    return combined.sort(() => Math.random() - 0.5);
  }, [quizState]);

  const handleAnswer = () => {
    setShowAnswers(true);
  };

  useEffect(() => {
    setShowAnswers(false);
  }, [quizState]);

  return (
    <>
      {allAnswers.map((answer, index) => {
        let className = 'answer'; // base class

        if (showAnswers) {
          if (answer ===  quizState.questions[quizState.currentQuetionIndex].correctAnswer) {
            className += ' correct-answer';
          } else {
            className += ' wrong-answer';
          }
        }

        return (
          <div className={className} key={index}>
            <div className="answer-letter">{answerLetter[index]}</div>
            <button
              className="answer-text"
              onClick={() => !showAnswers && handleAnswer()}
            >
              {answer}
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Answer;
