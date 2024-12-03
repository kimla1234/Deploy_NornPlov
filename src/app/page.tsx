import Image from "next/image";
export default function Home() {
  return (
    <div className="w-full h-auto bg-white ">
      <section>
        <div className="flex justify-center ">
          {/* Content */}
          <div className="container mx-auto px-4 pt-16 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-emerald-500">ស្វែងរក</span>
              <span className="text-orange-400">ជំនាញឯកទេស</span>
              <span className="text-emerald-500">របស់អ្នក</span>
            </h1>

            <p className="max-w-5xl mx-auto text-textprimary text-lg mb-8">
              រកឃើញសក្តានុពលរបស់អ្នក និងស្វែងរកជំនាញឯកទេស
              នៅសាកលវិទ្យាល័យដែលស្របទៅនឹងចំណង់ចំណូលចិត្ត ចំណុចខ្លាំង
              និងគោលដៅអាជីពនាពេលអនាគតរបស់អ្នក។
            </p>

            <button className="bg-emerald-500 text-white px-8 py-3 rounded-xl text-lg hover:bg-emerald-600 transition-colors">
              ចាប់ផ្តើម
            </button>
          </div>
        </div>
        <div>
          <Image
            src="/assets/background-home-page.png" // Path to your image
            alt="Background Home Page"
            width={200}
            height={200}
            className="object-cover w-full h-[50%]" // Ensures the image covers the container
          />
        </div>
      </section>
      {/* Feature */}
      <section className=" max-w-7xl flex justify-center mx-auto my-4 md:my-6">
        <div className="container mx-auto px-4 py-12 ">
          <h1 className="text-3xl font-bold text-center mb-12 text-textprimary">
            តើ<span className=" text-emerald-500">នាំផ្លូវ</span>
            សម្រាប់អ្នកណា?
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Student Section */}
            <div className="flex flex-col items-center text-center bg-amber-200">
              <div className="mb-2 relative w-90 h-90">
                <img
                  src="/assets/feature-1.png"
                  alt="Student studying"
                  width={256}
                  height={256}
                  className="object-contain"
                />
              </div>
              <div className="w-80 bg-orange-400">
                <h2 className="text-xl font-semibold mb-3 text-blue-800">
                  សិស្សនិស្សិត
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  សិស្សនិស្សិតអាចស្វែងរកលើកិច្ចការ
                  ចំណាប់អារម្មណ៍ខ្លួននិងជំនាញដែលខ្លួនចង់ធ្វើបន្តទៅ
                </p>
              </div>
            </div>

            {/* Professional Section */}
            <div className="flex flex-col items-center text-center bg-amber-200">
              <div className="mb-2 relative w-90 h-90">
                <img
                  src="/assets/feature-2.png"
                  alt="Professional working"
                  width={256}
                  height={256}
                  className="object-contain "
                />
              </div>
              <div className="w-80 bg-orange-400">
                <h2 className="text-xl font-semibold mb-3 text-blue-800">
                  សិស្សសកលនិស្សិត
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  សិស្សសកលនិស្សិតដែលបានអាចរៀបចំ
                  ស្វែងរកកំណត់ត្រូវដើម្បីនិស្សិតខ្លួន
                </p>
              </div>
            </div>

            {/* Business Professional Section */}
            <div className="flex flex-col items-center text-center bg-amber-200">
              <div className="mb-2 relative w-90 h-90">
                <img
                  src="/assets/feature-3.png"
                  alt="Business professional"
                  width={256}
                  height={256}
                  className="object-contain"
                />
              </div>
              <div className="w-80 bg-orange-400">
                <h2 className="text-xl font-semibold mb-3 text-blue-800">
                  បុគ្គលិកកំពុងធ្វើការងារ
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  បុគ្គលិកដែលចង់មានបទពិសោធន៍ផ្នែកផ្សេងៗ
                  និងដែលចង់ត្រូវនឹងជំនាញដែលខ្លួនកំពុងធ្វើ
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
