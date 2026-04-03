const NextQuestion = ({ dispatch, answer, numQuestions, index }) => {
  if (answer == null) return null;

  if (index < numQuestions - 1) {
    return(
    <button onClick={() => { dispatch({ type: "nextQuestion" }); }} >
      <span className="text-sm bg-glass px-5 py-2 cursor-pointer hover:bg-gray-700 hover:text-white transition duration-500">
        Next Question
      </span>
    </button>);
  }
  if (index === numQuestions - 1) {
    return(
    <button
      onClick={() => {
        dispatch({ type: "finishQuiz" });}}
    >
      <span className="text-sm bg-glass px-5 py-2 cursor-pointer hover:bg-gray-700 hover:text-white transition duration-500">
        finish quiz
      </span>
    </button>);
  }

};

export default NextQuestion;



