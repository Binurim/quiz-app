import { useEffect, useState, useMemo } from 'react';

const Answer = ({ answerD }) => {
  const answerLetter = ['A', 'B', 'C', 'D'];

  const [showAnswers, setShowAnswers] = useState(false);

  const allAnswers = useMemo(() => {
    const combined = [...answerD.incorrectAnswers, answerD.correctAnswer];
    return combined.sort(() => Math.random() - 0.5);
  }, [answerD]);

  const handleAnswer = () => {
    setShowAnswers(true);
  };

  useEffect(() => {
    setShowAnswers(false);
  }, [answerD]);

  return (
    <>
      {allAnswers.map((answer, index) => {
        let className = 'answer'; // base class

        if (showAnswers) {
          if (answer === answerD.correctAnswer) {
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
