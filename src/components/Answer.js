const Answer = ({ answerText, index, onSelectAnswer, currentAnswer, correctAnswer }) => {
  const answerLetter = ['A', 'B', 'C', 'D'];

  const isCorrectAnswer = currentAnswer && answerText === correctAnswer;
  const isWrongAnswer = currentAnswer === answerText && currentAnswer !== correctAnswer;

  const correctAnswerClass = isCorrectAnswer ? 'correct-answer': '';
  const wrongAnswerClass =  isWrongAnswer ? 'wrong-answer': '';

  const disabledClass =  currentAnswer ? 'disabled-answer' : '';

  return (
    <div className={`answer ${correctAnswerClass} ${wrongAnswerClass} ${disabledClass}`}>
      <div className="answer-letter">{answerLetter[index]}</div>
      <button
        className="answer-text"
        onClick={() => onSelectAnswer(answerText)}>
        {answerText}
      </button>
    </div>
  );
};

export default Answer;
