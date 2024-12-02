import React from 'react'
import QuizHeader from './QuizHeader'
import enQuiz from '@/src/app/(user)/quiz/en.json'
import { QuizInstructContainer } from './QuizInstructContainer'

export const QuizIntroContainer = () => {

  const { introEn, instructEn } = enQuiz


  return (
    <div className='w-full h-auto md:h-[700px] lg:h-[500px] md:mb-48 lg:mb-16'>
      <div className='h-auto sm:h-80 md:h-[800px] lg:h-[400px] p-4 sm:p-6 md:p-8 lg:p-12 w-full bg-primary rounded-b-4 md:rounded-b-[24px] mb-6'>
        <div className='max-w-7xl mx-auto'>
          <QuizHeader title={introEn.title} highlight={introEn.highlight} description={introEn.description} size='md' />
          <QuizInstructContainer
            instructionLabel={instructEn.instructionLabel}
            howItWorksTitle={instructEn.howItWorksTitle}
            howItWorksSteps={instructEn.howItWorksSteps}
            representedImageTitle={instructEn.representedImageTitle}
            emojiLabels={instructEn.emojiLabels}
          />
        </div>

      </div>
    </div>

  )
}
