// 'use client'
// import React, { useState } from 'react';
// import * as Yup from 'yup';
// import { useRouter } from "next/navigation";
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import { IoCloseSharp } from "react-icons/io5";
// import Label from './LabelComponent';
// import DynamicField from './AuthField';
// import Error from './ErrorComponent';
// import PasswordField from './PasswordField';
// import Link from 'next/link';
// import Button from './ButtonComponentForAuth';
// type ValueTypes = {
// 	email: string;
// 	password: string;	
// };

// const initialValues: ValueTypes = {
// 	email: "",
// 	password: "",
// };

// const strongPasswordRegex = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&*]).{8,}$");
// const validationSchema = Yup.object().shape({
// 	email: Yup.string().email("Invalid email").required("អ្នកត្រូវបញ្ជូលអ៉ីម៉ែលរបស់អ្នក"),
//     password: Yup.string()
//     .min(8, 'Password is too short - at least 8 characters')
//     .required('អ្នកត្រូវបញ្ជូលពាក្យសម្ងាត់របស់អ្នក'),
// });

// const LoginComponent = ()=>{
//    return(
//         <section className='bg-sky-500 w-full h-screen flex justify-center items-center'>
//             <div className='bg-slate-300 w-4/5 h-5/6 m-auto'>
//                 <div className="right-24  absolute">
//                      <button
//                         className="text-2xl text-gray-700 hover:text-gray-900"
//                         onClick={() => console.log('Close button clicked')}
//                         >
//                              <IoCloseSharp />
//                     </button>
//                 </div>
//                 <div className='bg-blue-300 h-96 mt-12'>
//                     <h1 className='text-4xl font-bold text-primary'>ចូលគណនី</h1>
//                     {/* <div className='bg-yellow-500 flex justify-center w-full'> */}
//                         <Formik
//                             initialValues={initialValues}
//                             validationSchema={validationSchema}
//                             onSubmit={(values,{setSubmitting})=>{
//                                 console.log('Form Submitted:', values);
//                                 setSubmitting(false); // Simulate a submission delay
//                             }}
//                         >
                          
//                             <div >
//                                 <Form>
//                                     {/* form for login */}
//                                     <div className='space-y-4 mt-5'>
//                                         {/* username */}
//                                         <div className=''>
//                                             <Label htmlFor="email" text="អ៉ីម៉ែល" required />
//                                             <DynamicField  type="text" name="email" id="email" placeholder="បញ្ចូលអ៉ីម៉ែលរបស់អ្នក" />
//                                             <Error  name='email' component='div' />
//                                         </div>
//                                         {/* password */}
//                                         <div className=''>
//                                             <Label htmlFor="password" text="ពាក្យសម្ងាត់" required />
//                                             <PasswordField
//                                                 name="password" // Corresponds to the field name in Formik's initialValues
//                                                 id="password" // The ID of the field
//                                                 placeholder="បញ្ចូលពាក្យសម្ងាត់របស់អ្នក" // Custom placeholder
//                                                 className="custom-class" // Optional: additional custom styles
//                                             />
//                                             <Error  name='password' component='div' />
//                                         </div>

//                                     </div>
//                                     {/* forgot-password link */}
//                                     <div className='mt-2 text-right'>
//                                         <Link href="/forgot-password">
//                                             <span className='text-sm text-primary hover:underline'>ភេ្លចពាក្យសម្ងាត់របស់អ្នក?</span>   
//                                         </Link>
//                                     </div>
//                                     {/* button submit login */}
//                                     <div className="mt-4">
//                                         <Button
//                                             type="submit"
//                                             text="Login"
//                                             isLoading={isSubmitting} // Show loading spinner when the form is submitting
//                                             className="w-full bg-primary hover:bg-primarycolor800 text-white font-medium"
//                                         />
//                                     </div>
//                                 </Form>
                               
//                             </div>
//                         </Formik>

//                     {/* </div> */}
//                 </div>

//             </div>
//         </section>
//    )
// }

// export default  LoginComponent;


// // 'use client';
// // import React, { useState } from 'react';
// // import * as Yup from 'yup';
// // import { useRouter } from "next/navigation";
// // import { Formik, Form, Field, ErrorMessage } from 'formik';

// // type ValueTypes = {
// //   email: string;
// //   password: string;
// // };

// // const initialValues: ValueTypes = {
// //   email: "",
// //   password: "",
// // };

// // const strongPasswordRegex = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[@#$%^&*]).{8,}$");
// // const validationSchema = Yup.object().shape({
// //   email: Yup.string().email("Invalid email").required("Required"),
// //   password: Yup.string()
// //     .min(8, 'Password is too short - at least 8 characters')
// //     .required('Password Required'),
// // });

// // const LoginComponent = () => {
// //   return ( // Add return here to make it a valid React functional component
// //     <main>
// //       <section className="bg-slate-400 p-4 rounded-md">
// //         <h1 className="text-xl font-bold mb-4">Login</h1>
// //         <Formik
// //           initialValues={initialValues}
// //           validationSchema={validationSchema}
// //           onSubmit={(values) => {
// //             console.log(values);
// //             // Perform login logic here
// //           }}
// //         >
// //           {({ isSubmitting }) => (
// //             <Form>
// //               <div className="mb-4">
// //                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
// //                 <Field
// //                   type="email"
// //                   name="email"
// //                   id="email"
// //                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                 />
// //                 <ErrorMessage
// //                   name="email"
// //                   component="div"
// //                   className="text-red-500 text-sm"
// //                 />
// //               </div>

// //               <div className="mb-4">
// //                 <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
// //                 <Field
// //                   type="password"
// //                   name="password"
// //                   id="password"
// //                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// //                 />
// //                 <ErrorMessage
// //                   name="password"
// //                   component="div"
// //                   className="text-red-500 text-sm"
// //                 />
// //               </div>

// //               <button
// //                 type="submit"
// //                 className="w-full bg-indigo-500 text-white py-2 px-4 rounded-md shadow-sm hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
// //                 disabled={isSubmitting}
// //               >
// //                 {isSubmitting ? 'Logging in...' : 'Login'}
// //               </button>
// //             </Form>
// //           )}
// //         </Formik>
// //       </section>
// //     </main>
// //   );
// // };

// // export default LoginComponent;


'use client';
import React from 'react';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { IoCloseSharp } from 'react-icons/io5';
import Label from './LabelComponent';
import DynamicField from './AuthField';
import Error from './ErrorComponent';
import PasswordField from './PasswordField';
import Link from 'next/link';
import Button from './ButtonComponentForAuth'; // Adjust the import path as needed

type ValueTypes = {
  email: string;
  password: string;
};

const initialValues: ValueTypes = {
  email: '',
  password: '',
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email('អ៉ីម៉ែលមិនត្រឹមត្រូវ').required('អ្នកត្រូវបញ្ជូលអ៉ីម៉ែលរបស់អ្នក'),
  password: Yup.string()
    .min(8, 'ពាក្យសម្ងាត់របស់អ្នកខ្លីពេក - តិចបំផុតគឺ 8 តួរ')
    .required('អ្នកត្រូវបញ្ជូលពាក្យសម្ងាត់របស់អ្នក'),
});

const LoginComponent = () => {
  return (
    <section className="w-full h-screen flex justify-center items-center ">
        <div className='w-[90%] h-[90%] sm:w-[75%] sm:h-[90%] md:w-[95%] md:h-[90%] xl:w-[85%] xl:h-[85%] m-auto border-1 border border-slate-100 rounded-xl'>
        <div className="px-6 sm:px-8 md:px-6 xl:px-10">
            <div className="right-9 top-11 sm:right-28 sm:top-12 md:right-5 md:top-10 lg:right-7 xl:right-16 absolute xl:top-16">
            <button
                className="text-2xl text-gray-500 hover:text-gray-700"
                onClick={() => console.log('Close button clicked')}
            >
                <IoCloseSharp />
            </button>
            </div>
        <div className=" h-fit mt-20 xl:mt-24">
          <h1 className="text-4xl font-bold text-primary">ចូលគណនី</h1>
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
                <div className="space-y-4 mt-5">
                  {/* Email Field */}
                  <div>
                    <Label htmlFor="email" text="អ៉ីម៉ែល" required />
                    <DynamicField
                      type="text"
                      name="email"
                      id="email"
                      placeholder="បញ្ចូលអ៉ីម៉ែលរបស់អ្នក"
                    />
                    <Error name="email" component="div" />
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
                    <Error name="password" component="div" />
                  </div>
                </div>

                {/* Forgot Password Link */}
                <div className="mt-2 text-right">
                  <Link href="/forgot-password">
                    <span className="text-sm text-primary hover:underline hover:font-semibold ">
                      ភេ្លចពាក្យសម្ងាត់របស់អ្នក?
                    </span>
                  </Link>
                </div>

                {/* Submit Button */}
                <div className="mt-6">
                  <Button
                    type="submit"
                    text="ចូលគណនី"
                    isLoading={isSubmitting} // Show loading spinner when the form is submitting
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
                    <span>មិនទាន់មានគណនីមែនទេ?<Link href="/register" className='text-primary hover:underline hover:font-semibold pl-1.5'>បង្កើតគណនី</Link></span>
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

export default LoginComponent;
