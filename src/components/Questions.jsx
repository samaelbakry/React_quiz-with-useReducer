import Options from "./Options";

const Questions = ({ question, dispatch, answer }) => {
  return (
    <>
      <div className="bg-glass p-6 space-y-6">
        <h3 className="text-xl font-semibold text-white">
          {question.question}
        </h3>
        <Options question={question} dispatch={dispatch} answer={answer} />
      </div>
    </>
  );
};

export default Questions;
