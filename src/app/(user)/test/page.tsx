'use client'
import QuizHeader from '@/src/components/QuizComponent/QuizHeader'
import { QuizIntroContainer } from '@/src/components/QuizComponent/QuizIntroContainer'
import React from 'react'
import { QuizOptHorizontalContainer } from '@/src/components/QuizComponent/QuizOptHorizontalContainer'
import { useRouter } from 'next/navigation';
// Import image
import interest from '@/public/Quiz/optQuiz/Interest.png'
import learning from '@/public/Quiz/optQuiz/learning style.png'
import skill from '@/public/Quiz/optQuiz/Skills.png'
import allTest from '@/public/Quiz/optQuiz/allTest.png'
import value from '@/public/Quiz/optQuiz/value.png'
import personality from '@/public/Quiz/optQuiz/Personality.png'

// Import json
import generalTestJson from '@/src/app/(user)/json/testGeneralKh.json'
import personalityJson from '@/src/app/(user)/json/personalityKh.json'
import interestJson from '@/src/app/(user)/json/interestKh.json'
import skillJson from '@/src/app/(user)/json/skillKh.json'
import valueJson from '@/src/app/(user)/json/valueKh.json'
import allTestJson from '@/src/app/(user)/json/allTest.json'
import learningStyleJson from '@/src/app/(user)/json/learningStyleKh.json'


export default function Quiz() {

  const router = useRouter();

  const handleQuizClick = (test: string) => {
    router.push(`/test/${test}`);
  };

  const { typeOfQuizKh, introKh, instructKh } = generalTestJson

  const { personalityMainKh } = personalityJson

  const { interestMainKh } = interestJson

  const { skillMainKh } = skillJson

  const { valueMainKh } = valueJson

  const { learningStyleMainKh } = learningStyleJson

  const { allTestMainKh } = allTestJson

  const quizOptions = [
    { title: personalityMainKh.title, desc: personalityMainKh.desc, image: personality, buttonText: personalityMainKh.buttonText, route: personalityMainKh.route },
    { title: interestMainKh.title, desc: interestMainKh.desc, image: interest, buttonText: interestMainKh.buttonText, route: interestMainKh.route },
    { title: skillMainKh.title, desc: skillMainKh.desc, image: skill, buttonText: skillMainKh.buttonText, route: skillMainKh.route },
    { title: learningStyleMainKh.title, desc: learningStyleMainKh.desc, image: learning, buttonText: learningStyleMainKh.buttonText, route: learningStyleMainKh.route },
    { title: valueMainKh.title, desc: valueMainKh.desc, image: value, buttonText: valueMainKh.buttonText, route: valueMainKh.route },
    { title: allTestMainKh.title, desc: allTestMainKh.desc, image: allTest, buttonText: allTestMainKh.buttonText, route: allTestMainKh.route }
  ];


  return (
    <div className='w-full bg-bgPrimaryLight '>
      
      <QuizIntroContainer
        introTitle={introKh.title}
        introHightlight={introKh.highlight}
        introDesc={introKh.description}
        instructLabel={instructKh.instructionLabel}
        howItWorkTitle={instructKh.howItWorksTitle}
        howItWorkStep={instructKh.howItWorksSteps}
        emojiLabels={instructKh.emojiLabels}
        RepresentedImageTitle={instructKh.representedImageTitle}
      />

      <div className='max-w-7xl mx-auto my-4 md:my-6 lg:pt-4 px-4 md:px-6 lg:px-0'>
        <QuizHeader
          title={typeOfQuizKh.title}
          description={typeOfQuizKh.description}
          size='sm'
          type='result'
        />
      </div>
      <div className='max-w-7xl mx-auto px-4 md:px-6 lg:px-0  grid grid-cols-1 lg:grid-cols-2 gap-6 pb-6 '>
        {quizOptions.map((option, index) => (
          <QuizOptHorizontalContainer
            key={index} 
            title={option.title}
            desc={option.desc}
            image={option.image}
            buttonText={option.buttonText}
            onClick={() => handleQuizClick(option.route)}
          />
        ))}
      </div>


    </div>
  )
}
