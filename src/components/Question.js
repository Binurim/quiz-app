import Answer from './Answer';
import { useContext } from 'react';
import { QuizContext } from '../context/QuizContext';

const Question = () => {

const [quizState] = useContext(QuizContext);
const currentQuestion = quizState.questions[quizState.currentQuetionIndex];

  return (
    <div>
      <div className="question">{currentQuestion.question}</div>
      <div className="answers">
        <Answer/>
      </div>
    </div>
  );
};

export default Question;