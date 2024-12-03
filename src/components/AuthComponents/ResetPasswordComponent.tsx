'use client';
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { IoCloseSharp } from 'react-icons/io5';
import Label from './LabelComponent';
import DynamicField from './AuthField';
import ErrorDynamic from './ErrorComponent';
import PasswordField from './PasswordField';
import Link from 'next/link';
import Button from './ButtonComponentForAuth'; // Adjust the import path as needed

type ValueTypes = {
    new_password: string;
    confirm_password:string;
};

const initialValues: ValueTypes = {
    new_password: '',
    confirm_password: '',
};
const strongPasswordRegex = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&*]).{8,}$");
const validationSchema = Yup.object().shape({
    username:Yup.string().max(60,"ឈ្មោះរបស់អ្នកវែងពេក").required("អ្នកត្រូវបញ្ជូលឈ្មោះរបស់អ្នក"),
    email: Yup.string().email('Invalid email').required('អ្នកត្រូវបញ្ជូលអ៉ីម៉ែលរបស់អ្នក'),
    new_password: Yup.string()
     .min(8, "New Password is too short, At lease 8 characters")
    .matches(strongPasswordRegex, "New Password must contain at least one upper case English letter, one lower case English letter and one special character")
    .required("New Password is required"),
    confirm_password: Yup.string()
    .oneOf([Yup.ref("new_password")], "New Password must match")
    .required("Confirm password is required"),
});

const ResetPasswordComponent = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center ">
        <div className='w-[90%] h-[90%] sm:w-[75%] sm:h-[90%] md:w-[95%] md:h-[90%] xl:w-[85%] xl:h-[68%] m-auto border-1 border border-slate-100 rounded-xl'>
            <div className="px-6 sm:px-8 md:px-6 xl:px-10">
                {/* <div className='flex justify-end mt-3'> */}
                <div className="right-9 top-5 sm:right-24 sm:top-5 md:right-5 md:top-3 lg:right-5 xl:right-20 absolute xl:top-32">
                    <button
                    className="text-2xl text-gray-500 hover:text-gray-700"
                    onClick={() => console.log('Close button clicked')}
                    >
                        <IoCloseSharp />
                    </button>
                </div>
                <div className="h-fit mt-10 md:mt-11 xl:mt-24">
                    <h1 className="text-4xl font-bold text-primary">បង្កើតពាក្យសម្ងាត់ថ្មី</h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={(values, { setSubmitting }) => {
                        console.log('Form Submitted:', values);
                        setSubmitting(false); // Simulate a submission delay
                    }}
                    >
                    {({ isSubmitting }) => (
                        <Form>
                            {/* Form For Register */}
                            <div className="space-y-6 mt-10">
                                {/* Password Field */}
                                <div>
                                    <Label htmlFor="new_password" text="ពាក្យសម្ងាត់ថ្មី" required />
                                    <PasswordField
                                        name="new_password"
                                        id="new_password"
                                        placeholder="បញ្ចូលពាក្យសម្ងាត់ថ្មី"
                                        className="custom-class mt-1"
                                    />
                                    <ErrorDynamic  name="new_password" component="div" />
                                </div>

                                {/* Confirm Password Field */}
                                <div>
                                    <Label htmlFor="confirm_password" text="បញ្ជាក់ពាក្យសម្ងាត់ថ្មី" required />
                                    <PasswordField
                                        name="confirm_password"
                                        id="confirm_password"
                                        placeholder="បញ្ជាក់ពាក្យសម្ងាត់ថ្មីរបស់អ្នក"
                                        className="custom-class mt-1"
                                    />
                                    <ErrorDynamic  name="confirm_password" component="div" />
                                </div>

                            </div>

                            {/* Submit Button */}
                            <div className="mt-8">
                                <Button
                                    type="submit"
                                    text="រួចរាល់"
                                    isLoading={isSubmitting} // Show loading spinner when the form is submitting
                                    className="w-full bg-primary hover:bg-primary text-white font-medium border-collapse"
                                />
                            </div>
                        </Form>
              
                    )}
           
                    </Formik>
                </div>
            </div>
        </div>
      
    </section>
  );
};

export default ResetPasswordComponent;