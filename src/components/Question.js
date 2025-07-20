import Answer from './Answer';

const Question = ({questionD}) => {

  return (
    <div>
      <div className="question">{questionD?.question}</div>
      <div className="answers">
        <Answer answerD={questionD}/>
      </div>
    </div>
  );
};

export default Question;