'use client'
import React, { useState } from "react";
import OTPValidation from "@/src/components/AuthComponents/OTPValidation";
import { IoCloseSharp } from 'react-icons/io5';
import Button from './ButtonComponentForAuth'; // Adjust the import path as needed
import { useVerifyCodeRegisterMutation ,useResendVerifyCodeRegisterMutation} from "@/src/redux/service/auth"; // Import the mutation hook
import { useAppSelector } from "@/src/redux/hooks"; // Redux hook to access state
import 'react-toastify/dist/ReactToastify.css';
import { Flip, ToastContainer, toast } from 'react-toastify';
import { useRouter } from "next/navigation";

function OTPComponent() {
  const email = useAppSelector((state) => state.verify.email); // Get email from Redux store
  const [otp, setOtp] = useState(""); // Store OTP
  const [isSubmitting, setIsSubmitting] = useState(false); // Track submission state
  const [resending, setResending] = useState(false); // Track resend state
  const [verifyCodeRegister] = useVerifyCodeRegisterMutation(); // Use the mutation hook
  const [resendCode] = useResendVerifyCodeRegisterMutation(); // Mutation hook for resending code
  const router = useRouter();

   // Redirect to registration if email is not set
   if (!email) {
    toast.error("Email not found. Redirecting to registration.");
    router.push("/register");
    return null;
  }

  const handleOTPComplete = (otpValue: string) => {
    setOtp(otpValue); // Store OTP when fully entered
    console.log("OTP Entered:", otpValue);
  };
  const handleSubmit = async () => {
    setIsSubmitting(true); // Set submission state to true
    try{
      const response = await verifyCodeRegister({ email, verification_code: otp }).unwrap();
      toast.success("OTP Verified Successfully!");
      setTimeout(() => {
        // route.push("/resend-verification-code");
    }, 3000);
      console.log("Verification Response:", response);
    }catch(errors){
      console.error("Verification Error:", errors);
      toast.error("Failed to verify OTP. Please try again.");
    }finally {
      setIsSubmitting(false); // Stop loading
    }

  }

  const handleResendCode = async () => {
    setResending(true); // Set resend state to true
    try{
      await resendCode({ email }).unwrap();
      toast.success("Verification code resent successfully!");
    }catch(error){
      console.error("Resend Code Error:", error);
      toast.error("Failed to resend verification code. Please try again.");
    }finally {
      setResending(false); // Stop loading
    }
  }


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
         <div className="text-right mt-3">
                <button
                  className={`text-sm text-primary hover:underline ${
                    resending ? "cursor-not-allowed opacity-50" : ""
                  }`}
                  onClick={handleResendCode}
                  disabled={resending}
                >
                  {resending ? "Resending..." : "Resend Code"}
                </button>
              </div>
      </div>
      
                {/* Submit Button */}
                <div className="mt-6">
                  <Button
                    type="submit"
                    text="ផ្ទៀងផ្ទាត់"
                    onClick={handleSubmit}
                    isLoading={isSubmitting}
                    className="w-full bg-primary hover:bg-primary text-white font-medium border-collapse"
                  />
                </div>
    </div>
    <ToastContainer />
  </div>
    </div>
  
</section>
  );
}

export default OTPComponent;
