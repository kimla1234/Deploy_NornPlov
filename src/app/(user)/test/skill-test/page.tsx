'use client'
import { QuizIntroContainer } from '@/src/components/QuizComponent/QuizIntroContainer'
import React, { useState } from 'react'
import { Progress } from "@/src/components/ui/progress"
import { QuizQuestionContainer } from '@/src/components/QuizComponent/QuizQuestionContainer'
import TestJson from '@/src/app/(user)/json/testGeneralKh.json'
import skillJson from '@/src/app/(user)/json/skillKh.json'
import quizQuestions from '@/src/app/(user)/json/skillKh.json';
import { ArrowRight, ArchiveRestore } from "lucide-react"
import { useRouter } from 'next/navigation'
import { QuizButton } from '@/src/components/QuizComponent/QuizButton'


export default function SkillTest() {

    const [completedQuestions, setCompletedQuestions] = useState<number[]>([]); // Track which questions are answered
    const totalQuestions = 15; // Number of questions in your quiz

    // Update the list of completed questions when a question is answered
    const updateCompletedQuestions = (index: number) => {
        if (!completedQuestions.includes(index)) {
            setCompletedQuestions(prev => [...prev, index]); // Add the index of the completed question
        }
    }

    // Calculate the progress based on the completed questions
    const progress = Math.round((completedQuestions.length / totalQuestions) * 100);

    const router = useRouter();
    const handleResultClick = (test: string) => {
        router.push(`/test-result/${test}`);
    };

    const { instructKh, quizButtonKh } = TestJson

    const { skilltestintroKh } = skillJson

    return (
        <div className='w-full'>

            <div className='bg-bgPrimaryLight pb-6'>

                <QuizIntroContainer
                    introTitle={skilltestintroKh.title}
                    introHightlight={skilltestintroKh.highlight}
                    introDesc={skilltestintroKh.description}
                    instructLabel={instructKh.instructionLabel}
                    howItWorkTitle={instructKh.howItWorksTitle}
                    howItWorkStep={instructKh.howItWorksSteps}
                    emojiLabels={instructKh.emojiLabels}
                    RepresentedImageTitle={instructKh.representedImageTitle} />

                <div className='max-w-7xl mx-auto my-4 md:my-6 px-4'>
                    <p className='font-semibold mb-2 text-based md:text-lg '>{progress} %</p>
                    <Progress value={progress} className='h-2 md:h-4 ' />
                </div>
            </div>

            <div className='max-w-7xl mx-auto my-4 md:my-6 px-4'>
                {quizQuestions.questions.map((questionData) => (
                    <QuizQuestionContainer
                        key={questionData.questionIndex}
                        question={questionData.question}
                        questionIndex={questionData.questionIndex}
                        updateCompletedQuestions={updateCompletedQuestions}
                    />
                ))}
            </div>

            
            {/* button / will add toast for draft*/}
            <div className='max-w-7xl mx-auto px-4 py-6 flex gap-2 justify-end'>

                <QuizButton title={quizButtonKh.draft} rounded='xl' icon={<ArchiveRestore />} type='leftIcon' outline="true" />
                <QuizButton title={quizButtonKh.result} rounded='xl' icon={<ArrowRight />} type='rightIcon' onClick={() => handleResultClick('skill-test-result')} />

            </div>

        </div>
    )
}
