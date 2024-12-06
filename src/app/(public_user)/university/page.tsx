"use client";
import CardUniversity from "@/src/components/ui/CardUniversity";
import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import Select from "react-select";

// Define types for dropdown options
type OptionType = {
  value: string;
  label: string;
};

export default function Page() {
  // Dropdown options
  const universityOptions: OptionType[] = [
    { value: "1", label: "សាកលវិទ្យាល័យរដ្ឋ" },
    { value: "2", label: "សាកលវិទ្យាល័យឯកជន" },
    { value: "3", label: "វិទ្យាស្ថានបបណ្តុះបណ្តាល" },
  ];

  const locationOptions: OptionType[] = [
    { value: "phnom-penh", label: "រាជធានីភ្នំពេញ" },
    { value: "battambang", label: "បាត់ដំបង" },
    { value: "siem-reap", label: "សៀមរាប" },
  ];

  // State for dropdown selections with proper types
  const [selectedUniversity, setSelectedUniversity] =
    useState<OptionType | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<OptionType | null>(
    null
  );

  const handleUniversityChange = (selectedOption: OptionType | null) => {
    setSelectedUniversity(selectedOption);
    console.log("Selected University:", selectedOption);
  };

  const handleLocationChange = (selectedOption: OptionType | null) => {
    setSelectedLocation(selectedOption);
    console.log("Selected Location:", selectedOption);
  };

  return (
    <div className="mb-5">
      <div className="relative min-h-[200px] w-full ">
        {/* Background with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center lg:w-full lg:h-96 md:w-full md:h-80 w-full h-60 "
          style={{
            backgroundImage: 'url("/assets/bg-uni.jpg")',
          }}
        ></div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 lg:py-32 md:py-20 py-8">
          <h1 className="text-2xl md:text-4xl lg:text-5xl bordered-text font-bold text-white text-center lg:mb-8 md:mb-8 mb-2">
            ស្វែងរកគ្រឹះស្ថានសិក្សាទៅកម្ពុជា
          </h1>

          <div className="lg:max-w-4xl md:max-w-xl max-w-4xl mx-auto lg:space-y-4 md:space-y-4 space-y-2 ">
            {/* Search input */}
            <div className="flex">
              <input
                type="text"
                placeholder="ស្វែងរកទីនេះ....."
                className="flex-1 px-5 py-2 rounded-full border-0 focus:ring-2"
              />
              <div className="rounded-r-lg px-0.5 py-1 -ml-11">
                <button
                  type="button"
                  className="px-2 py-4 mr-2 flex justify-center items-center bg-primary rounded-full w-9 h-9 text-white transition-colors"
                >
                  <FaSearch />
                </button>
              </div>
            </div>

            {/* Filters */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:gap-4 md:gap-4 gap-2">
              <Select
                options={universityOptions}
                placeholder="សាកលវិទ្យាល័យរដ្ឋ"
                value={selectedUniversity}
                onChange={handleUniversityChange}
                className="rounded-full"
                isClearable
              />
              <Select
                options={locationOptions}
                placeholder="រាជធានីភ្នំពេញ"
                value={selectedLocation}
                onChange={handleLocationChange}
                className="rounded-full"
                isClearable
              />
            </div>
          </div>
        </div>
      </div>
      <section className="flex justify-center  ">
        <div className="lg:w-[80%] md:w-[92%] w-[92%] ">
          <div>
            <h1 className="text-2xl w-[90%] lg:mt-0 md:mt-4 mt-4 lg:w-full md:w-full md:text-2xl lg:text-4xl font-bold lg:text-start md:text-start text-start mb-2 text-textprimary">
              {selectedUniversity?.label
                ? `${selectedUniversity.label}`
                : "សាកលវិទ្យាល័យរដ្ឋ និងឯកជន"}
            </h1>
          </div>
          <CardUniversity />
          <div className=" lg:mt-8 md:mt-4 mt-4 mb-6 ">
            {/* Pagination */}
            <div className="mt-6 flex items-center lg:justify-between md:justify-between justify-center  pt-4">
              <p className="text-lg text-gray-600 hidden md:block lg:block">
                Showing 1 to 10 of 20 results
              </p>
              <div className="flex gap-2">
                <button
                  disabled
                  className="px-4 py-2 text-md font-medium text-gray-500 bg-gray-200 rounded-xl cursor-not-allowed"
                >
                  Previous
                </button>
                <button className="px-4 py-2 text-md font-medium text-white bg-primary rounded-full hover:primary focus:outline-none focus:ring-2 focus:ring-secondary">
                  1
                </button>
                <button className="px-4 py-2 text-md font-medium text-white bg-primary rounded-full hover:primary focus:outline-none focus:ring-2 focus:ring-secondary">
                  2
                </button>
                <button className="px-4 py-2 text-md font-medium text-white bg-primary rounded-full hover:primary focus:outline-none focus:ring-2 focus:ring-secondary">
                  3
                </button>
                <button className="px-4 py-2 text-md font-medium text-white bg-primary rounded-xl hover:primary focus:outline-none focus:ring-2 focus:ring-secondary">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
