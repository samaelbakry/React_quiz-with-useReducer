
const Options = ({ question, dispatch, answer }) => {
    return (
        <div className="flex flex-col gap-3">
      {question.options.map((option, index) => {
          let className = "btn-option";
          if (answer !== null) {
              if (index === question.correctOption) className += " correct";
              else if (index === answer) className += " wrong";
            }
            if (answer === index) className += " selected";

            return (<button key={index} className={className}
                onClick={() =>
                    dispatch({ type: "newAnswer", payload: index })
                }
                disabled={answer !== null}>
            {option}
          </button>
        );
    })}
    </div>
  );
};

export default Options