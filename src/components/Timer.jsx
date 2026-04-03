import { useEffect } from "react";

const Timer = ({ dispatch, remainingSeconds }) => {
  const mins = Math.floor(remainingSeconds / 60);
  const seconds = remainingSeconds % 60;
  useEffect(() => {
    const intervalId = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);
    return () => clearInterval(intervalId);
  }, [dispatch, remainingSeconds]);

  return (
    <>
      <div className="flex justify-start">
        <button className="bg-glass px-4 py-1">
            {mins < 10 && "0"} {mins} : {seconds < 10 && "0"} {seconds}
        </button>
      </div>
    </>
  );
};

export default Timer;
