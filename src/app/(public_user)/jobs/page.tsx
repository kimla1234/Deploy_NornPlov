'use client'
import { JobListingCard } from '@/src/components/JobComponent/JobListingCard'
import { JobMainContainer } from '@/src/components/JobComponent/JobMainContainer'
import logo from '@/public/job/khmerEnterpriseLogo.png'
import React from 'react'
import job from '@/public/job/job.png'
import { JobBannerCard } from '@/src/components/JobComponent/JobBannerCard'
import { JobDetailCard } from '@/src/components/JobComponent/JobDetailCard'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select"
import { QuizButton } from '@/src/components/QuizComponent/QuizButton'
import { LayoutTemplate, MapPin, Clock } from "lucide-react";

export default function Job() {
  return (
    <div className='w-full bg-bgPrimaryLight'>

      <JobMainContainer title='ជាមួយការងារដែលមានតម្រូវការខ្ពស់ក្នុងទីផ្សារ' desc='តាមដានទីផ្សារការងារដោយប្រើឧបករណ៍ឆ្លាតវៃរបស់យើងជាមួយនឹងការវិភាគទិន្នន័យដើម្បីស្វែងរកការងារដែលកំពុងពេញនិយម។ យើងនាំមកជូនអ្នកនូវឱកាសការងារដែលមានតម្រូវការខ្ពស់បំផុត ដើម្បីជួយអ្នករៀបចំផែនការសម្រាប់អនាគតដ៏ជោគជ័យ។' highlight='ឈានទៅរកអនាគតរបស់អ្នកនៅថ្ងៃនេះ' />

      <div className='max-w-7xl mx-auto px-4 py-4' >

        <div className='grid grid-cols-4 gap-4 text-textprimary' >
          {/*  Job category */}
          <Select>
            <SelectTrigger className="w-full bg-white rounded-[8px] border-2 border-gray-200 outline-none ">
              <div className='flex gap-2'>
                <LayoutTemplate size={18} color='#0BBB8A'/>
                <SelectValue  placeholder="ប្រភេទ" />
              </div>

            </SelectTrigger>
            <SelectContent className='bg-white text-textprimary'>
              <SelectItem className='focus:bg-bgPrimaryLight' value="light">Light</SelectItem>
              <SelectItem className='focus:bg-bgPrimaryLight' value="dark">Dark</SelectItem>
              <SelectItem className='focus:bg-bgPrimaryLight' value="system">System</SelectItem>
            </SelectContent>
          </Select>

          {/* Location */}
          <Select>
            <SelectTrigger className="w-full bg-white rounded-[8px] border-2 border-gray-200 outline-none ">
              <div className='flex gap-2'>
                <MapPin size={18} color='#0BBB8A'/>
                <SelectValue  placeholder="ទីកន្លែងបំពេញការងារ" />
              </div>

            </SelectTrigger>
            <SelectContent className='bg-white text-textprimary'>
              <SelectItem className='focus:bg-bgPrimaryLight' value="light">Light</SelectItem>
              <SelectItem className='focus:bg-bgPrimaryLight' value="dark">Dark</SelectItem>
              <SelectItem className='focus:bg-bgPrimaryLight' value="system">System</SelectItem>
            </SelectContent>
          </Select>
          

          {/* TIme Schdule */}
          <Select>
            <SelectTrigger className="w-full bg-white rounded-[8px] border-2 border-gray-200 outline-none ">
              <div className='flex gap-2'>
                <Clock size={18} color='#0BBB8A'/>
                <SelectValue  placeholder="ប្រភេទនៃការបំពេញការងារ" />
              </div>

            </SelectTrigger>
            <SelectContent className='bg-white text-textprimary'>
              <SelectItem className='focus:bg-bgPrimaryLight' value="light">Light</SelectItem>
              <SelectItem className='focus:bg-bgPrimaryLight' value="dark">Dark</SelectItem>
              <SelectItem className='focus:bg-bgPrimaryLight' value="system">System</SelectItem>
            </SelectContent>
          </Select>

          <QuizButton title='កំណត់ឡើងវិញ' rounded='xl' type='rightIcon' />

        </div>

      </div>





      {/* Job searching */}
      <div className='max-w-7xl mx-auto px-4 ' >

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 my-4'>
          <div className='lg:col-span-8 space-y-4'>
            <JobListingCard title='iOS Developer' desc='Anakut Digital Solutions' time='Full-time' location='Phnom Penh' image={logo} />
            <JobListingCard title='iOS Developer' desc='Anakut Digital Solutions' time='Full-time' location='Phnom Penh' image={logo} />
          </div>
          <div className='lg:col-span-4'>
            <JobBannerCard title='មិនទាន់ដឹងថាការងារមួយណាសាកសមនឹងអ្នក?' desc='សាកល្បងតេស្តវាយតម្លៃរបស់យើង និងស្វែងរកអាជីព ការងារដ៏មានសក្តានុពលនៅថ្ងៃនេះ' buttonText='សាកល្បងតេស្ត' image={job} />
          </div>
        </div>

      </div>

      {/* Job Result Card */}
      <div className='max-w-7xl mx-auto px-4 ' >

        <div className='grid grid-cols-1 lg:grid-cols-12 gap-4 my-4'>
          <div className='lg:col-span-5 space-y-4'>
            <JobListingCard title='iOS Developer' desc='Anakut Digital Solutions' time='Full-time' location='Phnom Penh' image={logo} />
            <JobListingCard title='iOS Developer' desc='Anakut Digital Solutions' time='Full-time' location='Phnom Penh' image={logo} />
          </div>
          <div className='lg:col-span-7'>
            <JobDetailCard jobTitle='Digital Product Owner' jobCompany='Anakut Digital Solutions' image={logo} time='Full time' location='Phnom Penh' category='Software Development' jobDesc='We are seeking a highly skilled and experienced Mid-Senior iOS Developer to join our dynamic team. As a Mid-Senior iOS Developer, you will play a crucial role in designing, developing, and maintaining high-quality iOS applications. You will work closely with cross-functional teams to deliver innovative solutions that delight our users.' jobDescLabel='ការណែនាំពីការងារ' buttonText='ដាក់ពាក្យ' salary='600+' />
          </div>
        </div>

      </div>

    </div>



  )
}
