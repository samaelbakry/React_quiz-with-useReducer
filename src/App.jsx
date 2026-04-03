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

let initialState = { questions: [], status: "loading" , index:0 , answer:null , points:0 };

function reducer(state, action) {
  switch (action.type) {
    case "dataReceived": {
      return { ...state, questions: action.payload, status: "ready" };
    }
    case "dataFailed": {
      return { ...state, status: "error" };
    };
	case "start" :{
		return {...state , status:"active"}
	}
	case "newAnswer" :{
		const question = state.questions[state.index]
		return {...state , answer:action.payload , points: action.payload === question.currentOption ? state.points + question.points :state.points}
	}
	case "nextQuestion" :{
    return {...state , answer: null , index: state.index +1 }
  }
    default: {
      throw new Error("action type not found");
    }
  }
}

const App = () => {
  const [{questions,status,index ,answer , points}, dispatch] = useReducer(reducer, initialState);

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
    <NextQuestion dispatch={dispatch} answer={answer}/>
    </>
    }
      </Main>
    </div>
  );
};

export default App;
