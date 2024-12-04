'use client';
import React, { useState } from "react";
import { useAppDispatch,useAppSelector } from '@/src/redux/hooks';
import 'react-toastify/dist/ReactToastify.css';
import { Flip, ToastContainer, toast } from 'react-toastify';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { IoCloseSharp } from 'react-icons/io5';
import Label from './LabelComponent';
import DynamicField from './AuthField';
import ErrorDynamic from './ErrorComponent';
import PasswordField from './PasswordField';
import Link from 'next/link';
import Button from './ButtonComponentForAuth'; // Adjust the import path as needed
import { useRegisterMutation } from '@/src/redux/service/auth';
import { setEmail } from "@/src/redux/feature/verify/verifySlice";
import { useRouter } from "next/navigation"; // For routing

type ValueTypes = {
    username:string;
    email: string;
    password: string;
    confirm_password:string;
};

const initialValues: ValueTypes = {
    username: '',
    email: '',
    password: '',
    confirm_password: '',
};
const strongPasswordRegex = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&*]).{8,}$");
const validationSchema = Yup.object().shape({
    username:Yup.string().max(60,"ឈ្មោះរបស់អ្នកវែងពេក").required("អ្នកត្រូវបញ្ជូលឈ្មោះរបស់អ្នក"),
    email: Yup.string().email('Invalid email').required('អ្នកត្រូវបញ្ជូលអ៉ីម៉ែលរបស់អ្នក'),
    password: Yup.string()
     .min(8, "Password is too short, At lease 8 characters")
    .matches(strongPasswordRegex, "Password must contain at least one upper case English letter, one lower case English letter and one special character")
    .required("Password is required"),
    confirm_password: Yup.string()
    .oneOf([Yup.ref("password")], "Password must match")
    .required("Confirm password is required"),
});

const RegisterComponent = () => {
    const [isLoading, setIsLoading] = useState(false); // Loading state
    const dispatch = useAppDispatch();
    const [register,{status,error}] = useRegisterMutation(); // Mutation for Register
    const router = useRouter(); // Use router for navigation
    const handleSubmit = async (user:ValueTypes) => {
        try{
            const res = await register({data:user}).unwrap();
        dispatch(setEmail(user.email));
        console.log(setEmail(user.email));
        toast.success("Register  Successfully.", {
            autoClose: 3000,
          });
          router.push("/verify-code-register"); // Redirect to OTP verification page
        }catch(error:any){
            if (error.status === 409) { // Assuming 409 status code indicates conflict, i.e., username or email already exists
                toast.error('Username or email already exists. Please choose another one.',{
                 
                });
            } else {
                toast.error('An error occurred during registration.');
            }
        }finally {
            setIsLoading(false); // Reset loading state to false
          }

    }

  return (
    <section className="w-full h-screen flex justify-center items-center ">
        <div className='w-[90%] h-[97%] sm:w-[75%] sm:h-[97%] md:w-[95%] md:h-[98%] xl:w-[85%] xl:h-[98%] m-auto border-1 border border-slate-100 rounded-xl md:border-none'>
            <div className="px-6 sm:px-8 md:px-6 xl:px-10">
                <div className="right-9 top-5 sm:right-24 sm:top-5 md:right-5 md:top-3 lg:right-5 xl:right-16 absolute xl:top-3">
                    <button
                    className="text-2xl text-gray-500 hover:text-gray-700"
                    onClick={() => console.log('Close button clicked')}
                    >
                        <IoCloseSharp />
                    </button>
                </div>
                <div className="h-fit mt-10 md:mt-11 xl:mt-10">
                    <h1 className="text-4xl font-bold text-primary">បង្កើតគណនីថ្មី</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                        handleSubmit(values);    
                        console.log('Form Submitted:', values);
                        setSubmitting(false); // Simulate a submission delay
                    }}
                    >
                    {() => (
                        <Form>
                            {/* Form For Register */}
                            <div className="space-y-4 mt-5">
                                {/* username Field */}
                                <div>
                                        <Label htmlFor="username" text="ឈ្មោះ" required />
                                        <DynamicField
                                            type="text"
                                            name="username"
                                            id="username"
                                            placeholder="បញ្ចូលឈ្មោះរបស់អ្នក"
                                        />
                                        <ErrorDynamic  name="username" component="div" />
                                    </div>
                                {/* Email Field */}
                                    <div>
                                        <Label htmlFor="email" text="អ៉ីម៉ែល" required />
                                        <DynamicField
                                            type="text"
                                            name="email"
                                            id="email"
                                            placeholder="បញ្ចូលអ៉ីម៉ែលរបស់អ្នក"
                                        />
                                        <ErrorDynamic  name="email" component="div" />
                                    </div>

                                {/* Password Field */}
                                <div>
                                    <Label htmlFor="password" text="ពាក្យសម្ងាត់" required />
                                    <PasswordField
                                        name="password"
                                        id="password"
                                        placeholder="បញ្ចូលពាក្យសម្ងាត់របស់អ្នក"
                                        className="custom-class mt-1"
                                    />
                                    <ErrorDynamic  name="password" component="div" />
                                </div>

                                {/* Confirm Password Field */}
                                <div>
                                    <Label htmlFor="confirm_password" text="បញ្ជាក់ពាក្យសម្ងាត់" required />
                                    <PasswordField
                                        name="confirm_password"
                                        id="confirm_password"
                                        placeholder="បញ្ចូលពាក្យសម្ងាត់របស់អ្នក"
                                        className="custom-class mt-1"
                                    />
                                    <ErrorDynamic name="confirm_password" component="div" />
                                </div>

                            </div>

                            {/* Submit Button */}
                            <div className="mt-6">
                                <Button
                                    type="submit"
                                    text="បង្កើតគណនី"
                                    isLoading={isLoading} // Show loading spinner when the form is submitting
                                    className="w-full bg-primary hover:bg-primary text-white font-medium border-collapse"
                                />
                            </div>

                            {/* OR Divider */}
                            <div className="flex items-center justify-center space-x-4 my-4">
                                <span className="w-1/2 border-b border-gray-300"></span>
                                <span className="text-sm text-gray-500">ឬ</span>
                                <span className="w-1/2 border-b border-gray-300"></span>
                            </div>

                            {/* Google Button */}
                            <div className="mt-4">
                                <Button
                                    type="button"
                                    text="ភ្ជាប់ជាមួយ Google"  
                                    onClick={() => console.log('Continue with Google clicked')}
                                    icon={
                                        <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                                        alt="Google"
                                        className="w-5 h-5"
                                        />
                                    }
                                    className="w-full border-2 border-primary  text-textprimary hover:bg-primary hover:text-white"
                                />
                            </div>
                            {/* Don't have accoun? Register */}
                            <div className='mt-4 text-center text-textprimary '>
                                <span>មានគណនីរួចហើយ?<Link href="/register" className='text-primary hover:underline hover:font-semibold pl-1.5'>ចូលគណនី</Link></span>
                            </div>
                        </Form>
              
                    )}
           
                    </Formik>
                    <ToastContainer />
                </div>
            </div>
        </div>
      
    </section>
  );
};

export default RegisterComponent;
