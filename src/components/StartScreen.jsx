
const StartScreen = ({ numQuestions , dispatch }) => {
  return (
    <section className="space-y-2 start">
		<h2 className="text-2xl font-bold text-center text-blue-300 ">Welcome to the React Quiz</h2>
		<p className="text-md text-center text-gray-300">You will be asked to answer {numQuestions} questions.</p>
        <button className="bg-blur px-5 py-2" onClick={()=>{dispatch({type:"start"})}}>
          Let's start!
        </button>
    </section>
  )
}

export default StartScreen

