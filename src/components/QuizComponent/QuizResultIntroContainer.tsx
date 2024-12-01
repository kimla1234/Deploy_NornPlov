import React from 'react'
import stepupImage from '@/public/Quiz/stepup.png'
import Image from 'next/image'
import QuizHeader from './QuizHeader'
import enQuiz from '@/src/app/(user)/quiz/en.json'

export const QuizResultIntroContainer = () => {

    const { personalityResultintroEn } = enQuiz

    return (
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full  bg-bglight gap-y-6 lg:gap-y-0 py-4 sm:py-6 md:py-8 lg:py-12">
       
        <div className="col-span-1 lg:col-span-8 px-4 sm:px-6 md:px-8 lg:px-12">
          <QuizHeader
            title={personalityResultintroEn.title}
            highlight={personalityResultintroEn.highlight}
            description={personalityResultintroEn.description}
            size="md"
            type="result"
          />
        </div>
  
        {/* Image Section: Full width for screens 1024px and lower, spans 3 columns on larger screens */}
        <div className="col-span-1 lg:col-span-4">
          <div className="relative w-full h-[300px] md:h-[600px] lg:h-[300px]">
            <Image
              src="/Quiz/stepup.png"
              alt="Stepup"
              fill
              className="object-contain"
              priority={true}
            />
          </div>
        </div>
      </div>
    )
}
