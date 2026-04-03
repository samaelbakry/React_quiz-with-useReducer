const Progress = ({ points, index, numQuestions, maxPoints ,answer }) => {
  return (
    <div className="w-full space-y-2">
      
      <progress value={index + Number(answer !== null)} max={numQuestions} className="progress-bar w-full h-3"/>
      <div className="flex items-center justify-between text-sm font-medium">
        <p>
          Question {index + 1} / {numQuestions}
        </p>
        <p>
          Score {points} / {maxPoints}
        </p>
      </div>

    </div>
  );
};

export default Progress;