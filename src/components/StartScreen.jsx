const StartScreen = ({ numQuestions, dispatch }) => {
  return (
    <section className="space-y-6 text-center">
      <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-indigo-400">
        React Quiz 🚀
      </h2>
      <p className="text-gray-400">
        Ready to test yourself with {numQuestions} questions?
      </p>

      <button
        className="btn-primary"
        onClick={() => dispatch({ type: "start" })}
      >
        Start Quiz
      </button>
    </section>
  );
};

export default StartScreen;
