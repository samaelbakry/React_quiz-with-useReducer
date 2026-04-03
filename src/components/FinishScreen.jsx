const FinishScreen = ({ points, maxPoints , highScore , dispatch }) => {
  const percent = (points / maxPoints) * 100;
  let message;

  switch (true) {
    case percent === 100:
      message = "Perfect score! 🔥";
      break;
    case percent >= 80:
      message = "Excellent job 💪";
      break;
    case percent >= 60:
      message = "Good effort 👍";
      break;
    case percent >= 40:
      message = "Not bad, keep practicing 👀";
      break;
    default:
      message = "You need more practice 📚";
  }
  return <>
    <div className="p-5 m-5 bg-glass space-y-2">
      <p>
        Your final score is {points} out of {maxPoints} ({Math.round(percent)}%)
      </p>
      <p className="text-center"> {message}</p>
      <p className="text-center">High Score: {highScore} points</p>
    </div>
    <button
      onClick={() => {
        dispatch({ type: "restart" });}}
    >
      <span className="text-md bg-glass px-5 py-2 cursor-pointer hover:bg-gray-700 hover:text-white transition duration-500">
        Restart quiz
      </span>
    </button>
  </>
};

export default FinishScreen;
