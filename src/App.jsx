import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { useReducer } from "react";
import Error from "./components/Error";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import Questions from "./components/Questions";
import NextQuestion from "./components/NextQuestion";
import Progress from "./components/Progress";
import FinishScreen from "./components/FinishScreen";
import Timer from "./components/Timer";
import Footer from "./components/Footer";

let initialState = { questions: [], status: "loading" , index:0 , answer:null , points:0 , highScore:0 , remainingSeconds:0 };
const SEC_PER_QUESTION = 30;

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived": {
      return { ...state, questions: action.payload, status: "ready" };
    }
    case "dataFailed": {
      return { ...state, status: "error" };
  };
	case "start" :{
		return {...state , status:"active" , remainingSeconds:state.questions.length * SEC_PER_QUESTION}
	}
	case "newAnswer" :{
		const question = state.questions[state.index]
		return {...state , answer:action.payload , points: action.payload === question.correctOption ? state.points + question.points :state.points}
	}
	case "nextQuestion" :{
    return {...state , answer: null , index: state.index +1 }
  }
  case "finishQuiz": {
      return { ...state, status: "finished" , highScore : state.points > state.highScore ? state.points : state.highScore };
    };
  case "restart": {
      return {...initialState , status: "ready" , questions:state.questions};
    };
  case "tick": {
      return {...state , remainingSeconds: state.remainingSeconds - 1 , status:state.remainingSeconds === 0 ? "finished" :state.status } ;
    };
    default: {
      throw new Error("action type not found");
    }
  }
}

const App = () => {
  const [{questions,status,index ,answer , points, highScore , remainingSeconds}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  const numQuestions = questions.length;
  const maxPoints = questions.reduce((prev,curr)=>prev + curr.points,0);

  return (
    <div className="bg-glass border max-w-6xl mx-auto border-slate-600 shadow shadow-violet-900 my-10 rounded-3xl p-5">
      <Header />
      <Main>
		{status === "loading" && <Loader/>}
		{status === "error" && <Error/>}
		{status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch}/>}
		{status === "active" && 
    <>
    <Progress numQuestions={numQuestions} index={index} points={points} maxPoints={maxPoints} answer={answer}/>
    <Questions question={questions[index]} dispatch={dispatch} answer={answer}/>
    <Footer>
    <Timer dispatch={dispatch} remainingSeconds={remainingSeconds}/>
    <NextQuestion dispatch={dispatch} answer={answer} numQuestions={numQuestions} index={index}/>
    </Footer>
    </>
    }
    {status === "finished" && <FinishScreen points={points} maxPoints={maxPoints} highScore={highScore} dispatch={dispatch} />}
      </Main>
    </div>
  );
};

export default App;
