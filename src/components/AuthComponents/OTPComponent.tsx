'use client'
import React from "react";
import OTPValidation from "@/src/components/AuthComponents/OTPValidation";
import { IoCloseSharp } from 'react-icons/io5';
import Button from './ButtonComponentForAuth'; // Adjust the import path as needed

function OTPComponent() {
  const handleOTPComplete = (otp: string) => {
    console.log("OTP Entered:", otp);
    // Add logic to verify OTP (e.g., API call)
  };
{/* <OTPValidation length={6} onComplete={handleOTPComplete} /> */}
  return (
    <section className="w-full h-screen flex justify-center items-center ">
    <div className='w-[90%] h-[90%] sm:w-[75%] sm:h-[90%] md:w-[95%] md:h-[90%] xl:w-[70%] xl:h-[50%] m-auto border-1 border border-slate-100 rounded-xl'>
    <div className="px-6 sm:px-8 md:px-6 xl:px-10">
        <div className="right-9 top-11 sm:right-28 sm:top-12 md:right-5 md:top-10 lg:right-7 xl:right-16 absolute xl:top-16">
        <button
            className="text-2xl text-gray-500 hover:text-gray-700"
            onClick={() => console.log('Close button clicked')}
        >
            <IoCloseSharp />
        </button>
        </div>
    <div className=" h-fit mt-20 xl:mt-20">
      <h1 className="text-4xl font-bold text-primary">ផ្ទៀងផ្ទាត់លេខកូដសម្ងាត់</h1>
      <p className="pt-4 text-slate-500">យើងបានផ្ញើលេខកូដ 6 ខ្ទង់ទៅកាន់អ៊ីមែលរបស់អ្នក។ </p>
      <div className="mt-6">
         <OTPValidation length={6} onComplete={handleOTPComplete} /> 
      </div>
      
                {/* Submit Button */}
                <div className="mt-6">
                  <Button
                    type="submit"
                    text="ផ្ទៀងផ្ទាត់"
                   
                    className="w-full bg-primary hover:bg-primary text-white font-medium border-collapse"
                  />
                </div>
    </div>
  </div>
    </div>
  
</section>
  );
}

export default OTPComponent;
