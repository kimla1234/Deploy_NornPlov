'use client'
import React, { useState } from 'react'
import Image, { StaticImageData } from 'next/image'
import interest from '@/public/Quiz/optQuiz/Interest.png'
import { QuizButton } from './QuizButton'
import { ArrowRight } from "lucide-react";
import placeholderImage from '@/public/Quiz/placeholder.jpg'

type props = {
  title: string;
  desc: string;
  image: StaticImageData | string;
  buttonText: string;
}

export const QuizOptContainer = ({title, desc, image, buttonText}: props) => {

  const [imgSrc, setImgSrc] = useState(image);

  return (
    <div className="flex flex-col md:flex-row w-full bg-white p-4 gap-4 rounded-xl">
      {/* Image Section */}
      <div className="flex-none md:w-1/4 flex justify-center items-center">
        <Image
          src={imgSrc}
          alt="Quiz Illustration"
          width={200}
          height={200}
          className="object-contain"
          onError={() => setImgSrc(placeholderImage)}
        />
      </div>

      {/* Text and Response Section */}
      <div className="flex-1">
        <h2 className="text-xl font-bold mb-2 text-primary">{title}</h2>
        <p className="text-base text-textprimary mb-4">
          {desc}
        </p>
        <div className='flex justify-start md:justify-end'>
          <QuizButton title={buttonText} rounded='full' icon={<ArrowRight />} type='rightIcon' />
        </div>

      </div>
    </div>
  )
}
