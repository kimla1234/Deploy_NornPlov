"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/test", label: "Test" },
  { href: "/university", label: "University" },
  { href: "/jobs", label: "Jobs" },
  { href: "/policy", label: "Policy" },
  { href: "/about-us", label: "About us" },
];

export default function NavbarPage() {
  const pathname = usePathname(); // Get the current path
  return (
    <div className="w-full bg-slate-100">
      <header className="flex md:w-[92.6%] lg:w-[92.6%] md:h-[75px] items-center justify-between py-1 mx-[20px] md:mx-[30px] lg:mx-[60px]">
        <div className="flex items-center space-x-10">
          <Link
            href="/"
            className="flex justify-between items-center text-lg text-green-700 font-bold "
          >
            Logo
          </Link>
          <div className="flex space-x-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-lg ${
                  pathname === link.href
                    ? "text-green-700 font-bold border-b-2 border-green-700"
                    : "text-gray-800 hover:text-green-700"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex justify-end items-center space-x-10">
          <div className="flex justify-end space-x-7">
            <div className="flex space-x-2">
              <Image
                src="/assets/khmer-flag.png"
                alt="Logo"
                width={180}
                height={180}
                className="w-6 h-6  object-cover hidden md:block rounded-full"
              />
              <div className="text-lg text-gray-800">Khmer</div>
            </div>
            <div className=" border-l-2 border-slate-400"></div>
            <div className="flex space-x-2">
              <Image
                src="/assets/english-flag.png"
                alt="Logo"
                width={180}
                height={180}
                className="w-6 h-6  object-cover hidden md:block rounded-full"
              />
              <div className="text-lg text-gray-800">English</div>
            </div>
          </div>
          <div className=" bg-emerald-500 rounded-xl px-5 py-2 ">Sign in</div>
        </div>
      </header>
    </div>
  );
}
