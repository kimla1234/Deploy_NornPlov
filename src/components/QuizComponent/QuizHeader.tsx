import React from 'react'

type props = {
    title: string;
    highlight?: string;
    description?: string; 
    size?: 'md' | 'sm';
    type?: 'quiz' | 'result';
  };

const QuizHeader = ({ title, highlight, description, size, type = 'quiz' }: props) => {
  return (
    <div className={` 
        ${size === 'md' ? 'space-y-4 md:space-y-6' : 'space-y-[4px] md:space-y-2' }`}>
        <h1 className={`font-semibold ${type === 'result' ? 'text-primary' : 'text-white'} ${size === 'md' ? 'text-4xl md:text-6xl ' : 'text-xl md:text-3xl'}`}>
        {size === 'md' ? (
        <>
          <span >{title}</span>
          <span className="text-secondary">{highlight}</span>
        </>
      ) : (
        <>{title}</>
      )}
        </h1>
        <p  className={`
          ${type === 'result' ? 'text-textprimary' : 'text-white' 
        } ${size === 'md' ? 'text-xl md:text-2xl' : 'text-md md:text-xl'}`} >{description}</p>
    </div>
  )
}

export default QuizHeader