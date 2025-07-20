import Question from './Question';

const Quiz = () => {
  return (
    <div>
      <div className="quiz">
        <div className="score">Question 1/8</div>
        <Question />
        <button className="next-button" type='button'>Next Question</button>
      </div>
    </div>
  );
};

export default Quiz;