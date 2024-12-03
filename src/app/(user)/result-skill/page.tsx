import CircularProgress from '@/src/components/QuizComponent/CircularProgressBar/CircularProgress'
import { QuizCircularProgress } from '@/src/components/QuizComponent/QuizCircularProgress'
import { QuizResultIntroContainer } from '@/src/components/QuizComponent/QuizResultIntroContainer'
import React from 'react'
import enQuiz from '@/src/app/(user)/json/en.json'
import { QuizResultListing } from '@/src/components/QuizComponent/QuizResultListing'
import checkIcon from '@/public/Quiz/skill-icon/check.png'
import upIcon from '@/public/Quiz/skill-icon/up.png'
import xIcon from '@/public/Quiz/skill-icon/x.png'
import QuizHeader from '@/src/components/QuizComponent/QuizHeader'
import { Feedback } from '@/src/components/General/Feedback'
import { QuizLinkAndChatContainer } from '@/src/components/QuizComponent/QuizLinkAndChatContainer'
import { QuizInterestResultCard } from '@/src/components/QuizComponent/QuizInterestResultCard'
import creativityImage from '@/public/Quiz/interest/creativity.png'
import enterprising from '@/public/Quiz/interest/enterprising.png'
import { QuizOptHorizontalContainer } from '@/src/components/QuizComponent/QuizOptHorizontalContainer'
import { RecommendationCard } from '@/src/components/QuizComponent/RecommendationCard'
import { QuizLearningStyleResultCard } from '@/src/components/QuizComponent/QuizLearningStyleResultCard'

export default function Skill() {

  const { personalityResultintroEn, RecommendationEn } = enQuiz

  return (
    <div className='w-full bg-bgPrimaryLight'>
      <QuizResultIntroContainer
        title={personalityResultintroEn.title}
        highlight={personalityResultintroEn.highlight}
        description={personalityResultintroEn.description}
        size="md"
        type="result"
      />

      {/* skill category  container */}
      <div className='bg-white py-9 lg:py-16'>
        <div className='space-y-6  lg:space-y-16 max-w-7xl mx-auto px-4'>
          <p className='text-lg md:text-xl lg:text-2xl text-textprimary'>
            <span className='text-primary font-semibold'>Cognitive Skills</span> is your domain skill refer to the mental abilities that individuals use to acquire knowledge, understand concepts, reason, and solve problems. These skills are essential for processing information, thinking critically, and making informed decisions. They involve the application of logic, creativity, and critical thinking to various tasks and situations.
          </p>

          <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6  '>
            <QuizCircularProgress title='ជំនាញក្នុងការយល់ដឹង​' desc='Cognitive Skill' progress={33} />
            <QuizCircularProgress title='ជំនាញអន្តរបុគ្គល​ ' desc='Interpersonal Skill' progress={90} color="#FFA500" />
            <QuizCircularProgress title='ជំនាញក្នុងការយល់ដឹង​' desc='Self-Management Skill' progress={10} color="#F5C449" />
            <QuizCircularProgress title='ជំនាញក្នុងការយល់ដឹង​' desc='Cognitive Skill' progress={57} color="#F88787" />
          </div>
        </div>

      </div>

      {/* Strength */}
      <div className='bg-bgPrimaryLight py-6 lg:py-16'>
        <div className='space-y-4 lg:space-y-8 max-w-7xl mx-auto px-4'>
          <QuizHeader title="ចំណុចខ្លាំងរបស់អ្នក" description="Strength" size='sm' type='result' />

          <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6  '>
            <QuizResultListing title='Complex Problem Solving' desc='Developed capacities used to solve novel, ill-defined problems in complex, real-world settings' image={checkIcon} />
            <QuizResultListing title='Complex Problem Solving' desc='Developed capacities used to solve novel, ill-defined problems in complex, real-world settings' image={checkIcon} />
          </div>

        </div>
      </div>


      {/* Growth */}
      <div className='bg-bgPrimaryLight py-6 lg:py-16'>
        <div className=' space-y-8 max-w-7xl mx-auto px-4'>
          <QuizHeader title="ចំណុចដែលអ្នកត្រូវអភិវឌ្ឍបន្ថែម" description="Growth Focus" size='sm' type='result' titleColor='text-secondary' />

          <div className=' grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6  '>
            <QuizResultListing title='Complex Problem Solving' desc='Developed capacities used to solve novel, ill-defined problems in complex, real-world settings' image={upIcon} />
            <QuizResultListing title='Complex Problem Solving' desc='Developed capacities used to solve novel, ill-defined problems in complex, real-world settings' image={upIcon} />
          </div>

        </div>
      </div>


      {/* weakness */}
      <div className='bg-bgPrimaryLight py-6 lg:py-16'>
        <div className=' space-y-8 max-w-7xl mx-auto px-4'>
          <QuizHeader title="ចំណុចខ្សោយរបស់អ្នក" description="Your Weakness" size='sm' type='result' titleColor='text-danger' />

          <div className=' grid grid-cols-1 lg:grid-cols-2  gap-4 lg:gap-6 '>
            <QuizResultListing title='Complex Problem Solving' desc='Developed capacities used to solve novel, ill-defined problems in complex, real-world settings' image={xIcon} />
            <QuizResultListing title='Complex Problem Solving' desc='Developed capacities used to solve novel, ill-defined problems in complex, real-world settings' image={xIcon} />
          </div>

        </div>
      </div>


      <QuizLinkAndChatContainer chatTitle='សន្ទនាជាមួយ AI' chatDesc='ស្វែងយល់បន្ថែមពីលទ្ធផលរបស់អ្នក' chatButton='សន្ទនាឥឡូវនេះ' linkTitle='ចែករំលែកលទ្ធផលតេស្តរបស់អ្នក' linkDesc='អនុញ្ញាតឱ្យគ្រួសារនិងមិត្តភក្តិរបស់អ្នកអាចមើលឃើញពីលទ្ធផលរបស់អ្នកដោយការចែករំលែកតំណភ្ជាប់នេះ' linkValue='http://example.com/link/to/document' />


      {/* Feedback section */}
      <Feedback title='មតិកែលម្អអ្នក, ជាការរីកចម្រើនយើង' desc='អរគុណសម្រាប់ការចូលរួមធ្វើតេស្តជាមួយនាំផ្លូវ សូមចែករំលែកគំនិតរបស់អ្នកលើលទ្ធផលសំណួរ និងអ្វីដែលយើងអាចកែលម្អបាន។' highlight='ពួកយើងរីករាយនឹងការផ្តល់មតិរបស់អ្នក' buttonTitle='ផ្ញើ' placeholder='សំណូមពរណាមួយសម្រាប់ការកែលម្អ' />



      {/* Interest card section */}
      <div className='space-y-4 lg:space-y-8 max-w-7xl mx-auto px-4'>
        <QuizHeader title="បុគ្គលដែលមានចំណាប់អារម្មណ៍លើផ្នែកនេះមានទំនោរទៅខាង" description="Individuals with an interest in this area tend to be" size='sm' type='result' />

        <div className='flex flex-wrap gap-4 justify-center'>
          <QuizInterestResultCard title='Artistic' desc='Creative and expressive individuals who enjoy working in artistic fields.' image={creativityImage} />

          <QuizInterestResultCard title='Artistic' desc='Creative and expressive individuals who enjoy working in artistic fields.' image={enterprising} />
        </div>


      </div>

      {/* learning style technique card section */}
      <div className='space-y-4 lg:space-y-8 max-w-7xl mx-auto px-4'>
        <QuizHeader title="បុគ្គលដែលមានចំណាប់អារម្មណ៍លើផ្នែកនេះមានទំនោរទៅខាង" description="Individuals with an interest in this area tend to be" size='sm' type='result' />

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <QuizOptHorizontalContainer title='Feynman Technique' desc=' Explain concepts out loud as if teaching someone else.' image={creativityImage} type='learninigStyle' badgeText='Understanding Complex Concepts' />
          <QuizOptHorizontalContainer title='Feynman Technique' desc=' Explain concepts out loud as if teaching someone else.' image={creativityImage} type='learninigStyle' badgeText='Understanding Complex Concepts' />
        </div>

      </div>

      <div className='space-y-4 lg:space-y-8 max-w-7xl mx-auto px-4'>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <RecommendationCard jobTitle={RecommendationEn.jobTitle} jobDesc={RecommendationEn.jobdesc} majors={RecommendationEn.majors} unis={RecommendationEn.unis} />
          <RecommendationCard jobTitle={RecommendationEn.jobTitle} jobDesc={RecommendationEn.jobdesc} majors={RecommendationEn.majors} unis={RecommendationEn.unis} />
        </div>

      </div>

      <div className='space-y-4 lg:space-y-8 max-w-7xl mx-auto px-4 my-4'>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          <QuizLearningStyleResultCard title='Auditory Learning' desc='Learners who process and retain information best through hearing and verbal communication. Learners who process and retain information best through hearing and verbal communication.' label={1} />
          <QuizLearningStyleResultCard title='Auditory Learning' desc='Learners who process and retain information best through hearing and verbal communication.' label={2}/>
          <QuizLearningStyleResultCard title='Auditory Learning' desc='Learners who process and retain information best through hearing and verbal communication.' label={3}/>
          <QuizLearningStyleResultCard title='Auditory Learning' desc='Learners who process and retain information best through hearing and verbal communication.' label={2}/>
        </div>

      </div>


    </div>






  )
}