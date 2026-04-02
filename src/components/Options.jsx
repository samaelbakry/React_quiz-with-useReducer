import React from 'react'

const Options = ({ question }) => {
  return <>
    {question.options.map((option, index) => (
      <button key={index} className='btn btn-options'>{option}</button>
    ))}
  </>
}

export default Options
