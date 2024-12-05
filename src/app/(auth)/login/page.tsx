import React from "react";
import LoginComponent from "@/src/components/AuthComponents/LoginComponent";
import Image from 'next/image'

export default function page() {
  return (
    <section className="w-full h-screen  md:flex items-center justify-center m-0">
    {/* section1 text for login */}
      <div className="w-full h-screen hidden md:flex bg-yellow-500 sm:bg-green-400 md:bg-red-500 lg:bg-blue-500 xl:bg-primary  lg:w-1/2 justify-center  ">
           <div className="mt-10">
           <div className="text-center w-[80%] bg-yellow-200 mx-auto ">
                <h1 className="text-3xl font-bold text-primary">Welcome to NormPlov Website</h1>
                <p className="text-slate-400 pt-4">រកឃើញសក្តានុពលរបស់អ្នក និងស្វែងរកជំនាញឯកទេស នៅសាកលវិទ្យាល័យដែលស្របទៅនឹងចំណង់ចំណូលចិត្ត ចំណុចខ្លាំង និងគោលដៅអាជីពនាពេលអនាគតរបស់អ្នក។</p>
            </div>
            <div className="bg-primary w-full mt-28">
            <Image
                   src="/assets/login.png"
                   width={617} height={617}
                    alt="Login Image"
                  />

            </div>
           </div>
      </div> 
     {/* section2 login component */} 
      <div className="w-full h-screen lg:w-1/2 bg-[#F3FBF9]">
          <LoginComponent/>
      </div> 
  </section>
  );
}
