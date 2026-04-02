import { useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import { useReducer } from "react";
import Error from "./components/Error";
import Loader from "./components/Loader";
import StartScreen from "./components/StartScreen";
import Questions from "./components/Questions";

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
    default: {
      throw new Error("action type not found");
    }
  }
}

const App = () => {
  const [{questions,status,index ,answer}, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch("http://localhost:9000/questions")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "dataReceived", payload: data }))
      .catch((err) => dispatch({ type: "dataFailed" }));
  }, []);

  const numQuestions = questions.length;

  return (
    <div className="bg-slate-900 border max-w-6xl mx-auto border-slate-600 shadow shadow-violet-700 m-5  rounded-3xl p-5">
      <Header />
      <Main>
		{status === "loading" && <Loader/>}
		{status === "error" && <Error/>}
		{status === "ready" && <StartScreen numQuestions={numQuestions} dispatch={dispatch}/>}
		{status === "active" && <Questions question={questions[index]} dispatch={dispatch} answer={answer}/>}
      </Main>
    </div>
  );
};

export default App;
