import Options from "./Options"

const Questions = ({ question }) => {
  return <>
   <div className="flex flex-col gap-4">
     <h3>{question.question}</h3>
    <Options question={question}/>
   </div>
  </>

}

export default Questions
