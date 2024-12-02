'use client'
import QuizHeader from '@/src/components/QuizComponent/QuizHeader'
import { QuizIntroContainer } from '@/src/components/QuizComponent/QuizIntroContainer'
import React, { useState } from 'react'
import enQuiz from '@/src/app/(user)/json/en.json'
import { QuizOptContainer } from '@/src/components/QuizComponent/QuizOptContainer'
import interest from '@/public/Quiz/optQuiz/Interest.png'
import { Progress } from "@/src/components/ui/progress"
import { QuizQuestionContainer } from '@/src/components/QuizComponent/QuizQuestionContainer'


export default function QuizSkill() {

    const { typeOfQuizEn, personalityMainEn } = enQuiz


    const [completedQuestions, setCompletedQuestions] = useState<number[]>([]); // Track which questions are answered
    const totalQuestions = 4; // Number of questions in your quiz

    // Update the list of completed questions when a question is answered
    const updateCompletedQuestions = (index: number) => {
        if (!completedQuestions.includes(index)) {
            setCompletedQuestions(prev => [...prev, index]); // Add the index of the completed question
        }
    }

    // Calculate the progress based on the completed questions
    const progress = (completedQuestions.length / totalQuestions) * 100;    


    return (
        <div className='w-full'>

            <div className='bg-bgPrimaryLight pb-6'>
                <QuizIntroContainer />
                <div className='max-w-7xl mx-auto my-4 md:my-6 px-4'>
                    <p className='font-semibold mb-2 text-based md:text-lg '>{progress} %</p>
                    <Progress value={progress} className='h-2 md:h-4 ' />
                </div>
            </div>

            <div className='max-w-7xl mx-auto my-4 md:my-6 px-4'>
            <QuizQuestionContainer
                    question="When faced with a challenging problem, I find multiple ways to approach a solution."
                    questionIndex={0}
                    updateCompletedQuestions={updateCompletedQuestions}
                />
                <QuizQuestionContainer
                    question="I always evaluate different perspectives before making a decision."
                    questionIndex={1}
                    updateCompletedQuestions={updateCompletedQuestions}
                />
                 <QuizQuestionContainer
                    question="I always evaluate different perspectives before making a decision."
                    questionIndex={2}
                    updateCompletedQuestions={updateCompletedQuestions}
                />
                <QuizQuestionContainer
                    question="I always evaluate different perspectives before making a decision."
                    questionIndex={3}
                    updateCompletedQuestions={updateCompletedQuestions}
                />
            </div>

        </div>
    )
}
