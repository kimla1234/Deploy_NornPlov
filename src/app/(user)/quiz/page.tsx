import QuizHeader from '@/src/components/QuizComponent/QuizHeader'
import { QuizIntroContainer } from '@/src/components/QuizComponent/QuizIntroContainer'
import React from 'react'
import enQuiz from '@/src/app/(user)/quiz/en.json'
import { QuizOptContainer } from '@/src/components/QuizComponent/QuizOptContainer'
import interest from '@/public/Quiz/optQuiz/Interest.png'

export default function Quiz() {

  const { typeOfQuizEn, personalityMainEn } = enQuiz

  return (
    <div className='w-full bg-bgPrimaryLight '>
      <QuizIntroContainer />
      <div className='mx-4 sm:mx-6 md:mx-8 lg:mx-12'>
        <QuizHeader title={typeOfQuizEn.title} description={typeOfQuizEn.description} size='sm' type='result' />
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 m-4 sm:m-6 md:m-8 lg:m-12'>
        <QuizOptContainer title={personalityMainEn.title} desc={personalityMainEn.desc} image={interest} buttonText={personalityMainEn.buttonText}/>
        <QuizOptContainer title={personalityMainEn.title} desc={personalityMainEn.desc} image={interest} buttonText={personalityMainEn.buttonText}/>
        <QuizOptContainer title={personalityMainEn.title} desc={personalityMainEn.desc} image={interest} buttonText={personalityMainEn.buttonText}/>
        <QuizOptContainer title={personalityMainEn.title} desc={personalityMainEn.desc} image={interest} buttonText={personalityMainEn.buttonText}/>
        
      </div>


    </div>
  )
}
