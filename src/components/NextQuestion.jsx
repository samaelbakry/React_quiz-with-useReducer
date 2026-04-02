
const NextQuestion = ({dispatch, answer}) => {
if(answer == null) return null
  return <>
  <button onClick={()=>{dispatch({type:"nextQuestion"})}}>
    <span className="text-sm bg-glass px-5 py-2 cursor-pointer hover:bg-gray-700 hover:text-white transition duration-500">Next Question</span>
  </button>
  </>
}

export default NextQuestion
