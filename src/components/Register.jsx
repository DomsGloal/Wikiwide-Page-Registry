import React from "react";
import Mission from '../assets/ourMission.jpg'
import Leaders  from '../assets/leaders.jpg'
import Innovator from '../assets/innovators.jpg'
import Artist from '../assets/artistbrush.jpg'
import Arrow from '../assets/Screenshot 2025-07-02 172524.png'


function RegistrySection(){

  const steps = [
    {
      label: "Step 1",
      description: "Choose to Apply, Nominate, or Submit",
    },
    {
      label: "Step 2",
      description: "Fill the appropriate form with profile details and references",
    },
    {
      label: "Step 3",
      description: "Our editorial board reviews and verifies the submission",
    },
    {
      label: "Step 4",
      description: (
        <>
          Approved profiles are curated, designed, and published on{" "}
          <a href="https://wikiwide.org" className="text-blue-600 underline">
            wikiwide.org
          </a>
        </>
      ),
    },
  ];
    return(
        <>
        <section>
<div className="max-w-4xl mx-auto text-center px-6 py-12">
        <h1 className="text-2xl md:text-4xl font-serif  mb-4">
          The Registry of Those Who <br className="hidden md:block" />
          Shape History
        </h1>
        <p className="text-sm md:text-base text-gray-700 mb-6">
          Explore the remarkable individuals who have influenced our world.
        </p>
        <button className="border border-black text-black bg-white px-6 py-3 rounded-md hover:bg-black hover:text-white hover:scale-105 transition">
  Submit Page Edit Request
</button>

      </div>

<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 px-6 py-12">
  {/* WHY WE EXIST */}
  <div className="flex-1 flex flex-col items-start space-y-4">
    <h1 className="text-xl md:text-2xl font-serif mb-2">Why We Exist</h1>
    <p className="text-gray-700">
      Our mission is to document and celebrate history's most impactful figures.
    </p>
    <button className="bg-black text-white px-5 py-2 rounded-md hover:scale-105 transition">
      Apply for page inclusion
    </button>
  </div>

  {/* OUR MISSION */}
  <div className="flex-1 flex items-center border rounded-lg p-6 gap-4">
    <img src={Mission} className="h-16 w-16 flex-shrink-0 object-cover" alt="Our Mission" />
    <div className="flex flex-col">
      <h4 className="text-lg md:text-xl font-bold mb-2">Our Mission</h4>
      <p className="text-gray-700 text-sm md:text-base">
        By creating well-documented legacy profiles, we ensure those who make a
        difference are remembered — with dignity, clarity, and digital permanence.
      </p>
    </div>
  </div>
</div>

        </section>


        <section className="bg-black text-white w-full mt-14">
             <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-6  space-y-8 md:space-y-0">
                    {/* Left: Headings */}
                    <div className="md:w-1/2 text-left pl-16">
                      <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 ">
                        Who Can be <br /> Featured?
                      </h2>
                      <p className="text-sm text-gray-300">
                        Nominations are aceepted globally and evaluated <br/>
                        on authenticity ,relevance, and public contribution
                      </p>
                    </div>
            
                    {/* Right: Items */}
                    <div className="md:w-1/2 flex flex-col space-y-6 pl-24">
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">     <img src={Leaders} className="h-16 w-16 flex-shrink-0 object-cover" alt="Our Mission" />  </div>
                        <div>
                          <h3 className="font-semibold">Leaders</h3>
                          <p className="text-sm text-gray-300">Share your expertise.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">    <img src={Innovator} className="h-16 w-16 flex-shrink-0 object-cover" alt="Our Mission" /> </div>
                        <div>
                          <h3 className="font-semibold">Innovators</h3>
                          <p className="text-sm text-gray-300">Establish your legacy.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-4">
                        <div className="text-3xl">     <img src={Artist} className="h-16 w-16 flex-shrink-0 object-cover" alt="Our Mission" /></div>
                        <div>
                          <h3 className="font-semibold">Artists</h3>
                          <p className="text-sm text-gray-300">Display your journey.</p>
                        </div>
                      </div>
                    </div>
                  </div>
        </section>


    <section className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 px-6 py-12">
      {/* LEFT: Vertical Steps */}
      <div className="flex-1 flex flex-col items-center space-y-8 relative">
        {steps.map((step, index) => (
  <div key={index} className="flex flex-col items-center text-center space-y-2">
    <div className="flex items-center justify-center w-20 h-20 
      bg-gradient-to-br from-[#f5f7fa] to-[#c3cfe2] 
      rounded-tl-[20px]  rounded-tr-[30px] rounded-bl-none rounded-br-[30px]
      shadow-inner text-yellow-500 font-bold text-lg select-none"
      style={{
    background: 'radial-gradient(circle, rgba(255, 255, 255, 0.9) 40%, rgba(170, 207, 200, 0.8) 70%, rgba(10, 0, 10, 0.3) 100%)',
    boxShadow: 'inset 0 0 8px rgba(0, 0, 0, 0.1)'  // lighter and softer shadow
  }}
      >
      {step.label}
    </div>
    <p className="text-sm md:text-base text-gray-800 max-w-xs">{step.description}</p>
    {index < steps.length - 1 && (
      <img
        src={Arrow}
        alt="Arrow"
        className="w-6 h-12 my-2 rotate-90 md:rotate-0"
      />
    )}
  </div>
))}

      </div>

      {/* RIGHT: Process explanation */}
      <div className="flex-1 text-left md:text-left ">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">How the Process Works</h2>
        <p className="text-gray-700 mb-6">
          An editorial processing fee is required for all submissions. This
          supports fact-checking, content curation, and archival maintenance.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
          Complete Page Activation
        </button>
      </div>
    </section>
        
        </>
    )



}

export default RegistrySection