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
    email: string;
};

const initialValues: ValueTypes = {
    email: '',
};

const validationSchema = Yup.object().shape({
    email: Yup.string().email('អ៉ីម៉ែលមិនត្រឹមត្រូវ').required('អ្នកត្រូវបញ្ជូលអ៉ីម៉ែលរបស់អ្នក'),
});

const ForgotPasswordComponent = () => {
  return (
    
    <section className="w-full h-screen flex justify-center items-center ">
        <div className='w-[90%] h-[90%] sm:w-[75%] sm:h-[90%] md:w-[95%] md:h-[90%] xl:w-[85%] xl:h-[58%] m-auto border-1 border border-slate-100 rounded-xl'>
        <div className="px-6 sm:px-8 md:px-6 xl:px-10">
            {/* Close Button - Left Aligned */}
      <div className="flex justify-end pt-5 ml-3">
        <button
          className="text-2xl text-gray-500 hover:text-gray-700"
          onClick={() => console.log('Close button clicked')}
        >
          <IoCloseSharp />
        </button>
      </div>
        <div className=" h-fit mt-20 xl:mt-16">
          <h1 className="text-4xl font-bold text-primary">ភ្លេចពាក្យសម្ងាត់</h1>
          <p className='pt-3 text-slate-400'>សូមបញ្ចូលអ៊ីមែល ដើម្បីទទួលបានលេខកូដផ្ទៀងផ្ទាត់</p>
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
                <div className="space-y-4 mt-8">
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

                  
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <Button
                    type="submit"
                    text="ផ្ញើលេខសម្ងាត់"
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

export default ForgotPasswordComponent;
