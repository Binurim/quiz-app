export const shuffleAnswers = (question) => {
  const unshuffledAnswers = [
    question.correctAnswer,
    ...question.incorrectAnswers,
  ];

  return unshuffledAnswers
    .map((unshuffledAnswers) => ({
      sort: Math.random(),
      value: unshuffledAnswers,
    }))
    .sort((a, b) => a.sort - b.sort)
    .map((a) => a.value);
};

export const normalizeQuestions = (backendQuestions) => {
  return backendQuestions.map((backendQuestion) => {
    const incorrectAnswers = backendQuestion.incorrect_answers.map(
      (incorrectAnswer) => (incorrectAnswer)
    );
    return {
      correctAnswer: (backendQuestion.correct_answer),
      question: (backendQuestion.question),
      incorrectAnswers,
    };
  });
};
