"use client";
import React from "react";
import { MapPin, Globe, Phone, Mail, Book, Calendar } from "lucide-react";
import { ChevronDown } from "lucide-react";

// Button component
const Button = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    className={`px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 ${className}`}
    ref={ref}
    {...props}
  />
));
Button.displayName = "Button";

// Card component
const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    className={`bg-white rounded-xl shadow-sm ${className}`}
    ref={ref}
    {...props}
  />
));
Card.displayName = "Card";

// CardContent component
const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className={`p-6 ${className}`} ref={ref} {...props} />
));
CardContent.displayName = "CardContent";

// Button component
const Button1 = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>(({ className, ...props }, ref) => (
  <button
    ref={ref}
    className={`inline-flex items-center justify-between rounded-md bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
));
Button.displayName = "Button";

export default function Page() {
  const [isOpen, setIsOpen] = React.useState(false);
  const courses = [
    { title: "គណិតវិទ្យា", price: "$800 - $1200", duration: "រយៈ 4 ខែ" },
    { title: "រូបវិទ្យា", price: "$800 - $1200", duration: "រយៈ 4 ខែ" },
    { title: "គីមីវិទ្យា", price: "$800 - $1200", duration: "រយៈ 4 ខែ" },
    { title: "ជីវវិទ្យា", price: "$800 - $1200", duration: "រយៈ 4 ខែ" },
    { title: "ឌីជីថលវិទ្យា", price: "$800 - $1200", duration: "រយៈ 4 ខែ" },
    { title: "បច្ចេកវិទ្យា", price: "$800 - $1200", duration: "រយៈ 4 ខែ" },
  ];

  return (
    <div className="min-h-screen bg-bglight">
      {/* Header */}
      <header className="relative">
        <div className="w-full h-[300px] overflow-hidden">
          <img
            src="/assets/cover-sala.png"
            alt="ISTAD Students"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto px-4  relative -mt-12">
          <div className="bg-white bg-opacity-30 w-auto h-[290px] backdrop-blur-lg border rounded-xl p-6 shadow-sm flex flex-col md:flex-row items-center gap-6">
            <img
              src="/assets/logo-istad.jpg"
              alt="ISTAD Logo"
              className="w-60 h-60 rounded-full border-4 border-primary"
            />
            <div className="text-center md:text-left">
              <h1 className="text-2xl md:text-5xl font-bold text-textprimary mb-3">
                មជ្ឈមណ្ឌលអភិវឌ្ឍន៍វិទ្យាសាស្ត្រ និងបច្ចេកវិទ្យាកម្រិតខ្ពស់
              </h1>
              <p className="text-gray-600 text-3xl mb-2">
                INSTITUTION OF SCIENCE AND TECHNOLOGY ADVANCED DEVELOPMENT
              </p>
              <p className="text-textprimary text-2xl mb-4">
                ផ្ទះលេខ ២៤ ផ្លូវ ៥៦២ សង្កាត់បឹងកក់ ១ ខណ្ឌទួលគោក រាជធានីភ្នំពេញ
              </p>
              <button className="bg-primary text-lg text-white py-2 px-6 rounded-xl hover:bg-secondary transition-all">
                ចូលទៅកាន់គេហទំព័រ
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4  py-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1 space-y-3">
          <Card>
            <CardContent>
              <h2 className="font-bold text-textprimary text-xl mb-4">
                ទីតាំងយើងខ្ញុំ
              </h2>
              <div className="aspect-[4/3] bg-gray-100 rounded-lg mb-4">
                {/* Map placeholder */}
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <MapPin className="w-8 h-8" />
                </div>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex  gap-2">
                  <MapPin className="w-6 h-6 text-gray-400" />
                  <div className=" text-[16px]">
                    Sangkat Boeung Kak I, Khan Toul Kork, Phnom Penh
                  </div>
                </div>
                <p className="flex items-center gap-2">
                  <Globe className="w-6 h-6 text-gray-400" />
                  <a
                    href="https://www.istad.edu.kh/"
                    className="text-blue-500 hover:underline text-[16px]"
                  >
                    https://www.istad.edu.kh/
                  </a>
                </p>
                <p className="flex items-center gap-2">
                  <Phone className="w-6 h-6 text-gray-400 text-[16px]" />
                  <span className="text-[16px]">+855959910</span>
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="w-6 h-6 text-gray-400" />
                  <span className="text-[16px]">info.istad@gmail.com</span>
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <h2 className="font-bold text-xl text-primary mb-4">បេសកកម្ម</h2>
              <div className="space-y-2 text-md text-gray-600">
                <p>
                  Provide the latest methodology with high-quality training and
                  mentoring
                </p>
                <p>
                  Build up the capacity and career of IT experts in Cambodia
                </p>
                <p>Consult and connect ISTAD trainees to top IT careers</p>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent>
              <h2 className="font-bold text-xl text-primary mb-4">
                ចក្ខុវិស័យ
              </h2>
              <div className="space-y-2 text-md text-gray-600">
                <p>Advanced IT Institute in Cambodia</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <div className="md:col-span-2">
          <Card>
            <CardContent>
              <h2 className="font-bold text-xl text-textprimary mb-4">
                អំពីសាលា
              </h2>
              <div className="space-y-2 text-lg text-gray-600">
                <p>
                  សកលវិទ្យាល័យភូមិន្ទភ្នំពេញត្រួវបានបង្កើតឡើងដំបូងនៅឆ្នាំ១៩៦០
                  អំឡុងពេលដែលប្រទេសកម្ពុជាមានការរីកចម្រើនយ៉ាងខ្លាំងក្លា ដោយមាន
                  ឈ្មោះដើមថា សាកលវិទ្យាល័យភូមិន្ទ។
                  នៅពេលនោះភាសាដែលត្រូវបានគេប្រើប្រាស់ជាភាសាបារាំង។
                  នៅសម័យសាធារណរដ្ឋខ្មែរ សាកល
                  វិទ្យាល័យបានត្រូវប្តូរឈ្មោះជាសាកលវិទ្យាល័យភ្នំពេញ។
                  នៅសម័យខ្មែរក្រហម សាកលវិទ្យាល័យនៅទូទាំងប្រទេស​ត្រូវបានបិទទ្វារ
                  ហើយ
                  សាស្ត្រាចារ្យទាំងអស់បានក្លាយជាមុខសញ្ញានៃការសម្លាប់របស់ពួកខ្មែរក្រហម។
                </p>
              </div>
            </CardContent>
          </Card>
          <div className="bg-white p-6 rounded-xl shadow-sm mt-4 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900">ជំនាញសិក្សា</h2>
              <span className="text-orange-500 font-medium">
                តម្លៃសិក្សា៖ 350$ - 1200$
              </span>
            </div>

            <div className="relative bg-primary">
              <Button1 onClick={() => setIsOpen(!isOpen)} className="w-full ">
                <span>មុខវិជ្ជាបច្ចេកវិទ្យាគមនាគមន៍</span>
                <ChevronDown
                  className={`ml-2 h-4 w-4 transition-transform ${
                    isOpen ? "transform rotate-180 " : ""
                  }`}
                />
              </Button1>

              {isOpen && (
                <div className="absolute z-10 mt-1 w-full rounded-md bg-green-50 shadow-lg">
                  <div className="py-1">
                    {["ជំនាញទី១", "ជំនាញទី២", "ជំនាញទី៣"].map((item, index) => (
                      <button
                        key={index}
                        className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {courses.map((course, index) => (
              <Card key={index}>
                <CardContent>
                  <div className="flex items-start gap-4">
                    <Book className="w-6 h-6 text-emerald-500" />
                    <div>
                      <h3 className="font-semibold mb-2">{course.title}</h3>
                      <p className="text-sm text-gray-600 mb-1">
                        {course.price}
                      </p>
                      <p className="text-sm text-gray-600 flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {course.duration}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
