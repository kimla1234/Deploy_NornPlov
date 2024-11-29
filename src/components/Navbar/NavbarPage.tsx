import React from "react";
import Image from "next/image";

export default function NavbarPage() {
  return (
    <div className="w-full bg-slate-100">
      <header className="flex md:w-[92.6%] lg:w-[92.6%] md:h-[75px] items-center justify-between py-1 mx-[20px] md:mx-[30px] lg:mx-[60px]">
        <div className="flex items-center space-x-10">
          <a href="/" className="flex justify-between items-center">
            <Image
              src="/assets/logo-test.png"
              alt="Logo"
              width={180}
              height={180}
              className="w-10 h-10  object-cover hidden md:block"
            />
            <Image
              src="/assets/logo-test.png"
              alt="Logo"
              width={145}
              height={145}
              className=" w-14 h-14  mr-2 mt-1  object-cover block md:hidden mb-3.5"
            />
          </a>
          <div className="flex space-x-7 ">
            <a href="/" className="text-lg">Home</a>
            <a href="/test" className="text-lg">Test</a>
            <a href="/university" className="text-lg">University</a>
            <a href="/jobs" className="text-lg">Jobs</a>
            <a href="/about-us" className="text-lg">About us</a>
            <a href="/policy" className="text-lg">Policy</a>
          </div>
        </div>
        <div>Login</div>
      </header>
    </div>
  );
}
