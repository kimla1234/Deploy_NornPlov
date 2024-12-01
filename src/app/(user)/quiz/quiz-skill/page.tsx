import QuizHeader from '@/src/components/QuizComponent/QuizHeader'
import { QuizIntroContainer } from '@/src/components/QuizComponent/QuizIntroContainer'
import React from 'react'
import enQuiz from '@/src/app/(user)/quiz/en.json'
import { QuizOptContainer } from '@/src/components/QuizComponent/QuizOptContainer'
import interest from '@/public/Quiz/optQuiz/Interest.png'
import { Progress } from "@/src/components/ui/progress"


export default function QuizSkill() {

    const { typeOfQuizEn, personalityMainEn } = enQuiz
    const text = 33

    return (
        <div className='w-full bg-bgPrimaryLight '>
            <QuizIntroContainer />
            <div className='mx-4 sm:mx-6 md:mx-8 lg:mx-12'>
                <p className='font-semibold mb-2 text-xl'>{text} %</p>
                <Progress value={text} className='h-6' />
            </div>



        </div>
    )
}
