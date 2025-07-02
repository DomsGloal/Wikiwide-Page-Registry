
import React from "react";


import Faq1 from '../assets/faqimg1.jpg'
import Faq2 from '../assets/faqimg2.jpg'
import Faq3 from '../assets/faqimg3.jpg'
import Faq4 from '../assets/faqimg4.jpg'
import Faq5 from '../assets/faqimg5.jpg'
import Faq6 from '../assets/faqimg6.jpg'
import Faq7 from '../assets/faqimg7.jpg'
import Faq8 from '../assets/faqimg8.jpg'
import Faq9 from '../assets/faqimg9.png'
import Faq10 from '../assets/faqimg10.png'
import Faq11 from '../assets/faqimg11.png'




function Faq(){

    return <div className="max-w-7xl mx-auto" >
    

<section>
    <div className="max-w-4xl mx-auto text-center px-6 py-12">
        <h1 className="text-2xl md:text-4xl font-serif font-bold mb-4">
          The Registry of Those Who <br className="hidden md:block" />
          Shape History
        </h1>
        <p className="text-sm md:text-base text-gray-700 mb-6">
          Explore the remarkable individuals who have influenced our world.
        </p>
        <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
          Submit Page Edit request
        </button>
      </div>


<div className="flex flex-wrap justify-center gap-4 py-8">
  <div className="px-4 py-2 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-700 transition">
    About Wikipedia
  </div>
  <div className="px-4 py-2 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-700 transition">
    Eligibility & Listing
  </div>
  <div className="px-4 py-2 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-700 transition">
    Profile Management
  </div>
  <div className="px-4 py-2 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-700 transition">
    Visibility & SEO
  </div>
  <div className="px-4 py-2 bg-gray-800 text-white rounded-full cursor-pointer hover:bg-gray-700 transition">
    Partnerships & Integrations
  </div>
</div>


</section>













      <section className="bg-black text-white w-full py-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-12 px-4 md:px-8">
        {/* Left: Cards */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          <div className="flex items-start border border-gray-500 rounded-lg p-4 space-x-4">
            <img
              src={Faq1}
              alt="Profile 1"
              className="w-20 h-20 rounded-md object-cover"
            />
            <p className="text-sm md:text-base leading-relaxed text-gray-200">
              Wikiwide is a contemporary encyclopedia and recognition platform
              that documents verified profiles of distinguished individuals,
              businesses, institutions, and initiatives across industries.
            </p>
          </div>
          <div className="flex items-start border border-gray-500 rounded-lg p-4 space-x-4">
            <img
              src={Faq2}
              alt="Profile 2"
              className="w-20 h-20 rounded-md object-cover"
            />
            <p className="text-sm md:text-base leading-relaxed text-gray-200">
              Unlike crowd-edited platforms, Wikiwide is curated by a
              professional editorial team ensuring factual accuracy, premium
              presentation, and long-term archival value.
            </p>
          </div>
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            About Wikiwide
          </h2>
          <h3 className="text-lg md:text-xl font-semibold">What is Wikiwide?</h3>
          <h3 className="text-lg md:text-xl font-semibold">
            How is Wikiwide different from other platforms?
          </h3>
          <p className="text-sm md:text-base text-gray-400">
            Understanding our platform.
          </p>
        </div>
      </div>
    </section>
    

















       <section className="text-black w-full py-12 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-12 px-4 md:px-8">
        <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            About Wikiwide
          </h2>
          <h3 className="text-lg md:text-xl font-semibold">What is Wikiwide?</h3>
          <h3 className="text-lg md:text-xl font-semibold">
            How is Wikiwide different from other platforms?
          </h3>
          <p className="text-sm md:text-base text-gray-400">
            Understanding our platform.
          </p>
        </div>
        {/* Left: Cards */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          <div className="flex items-start border border-gray-500 rounded-lg p-4 space-x-4">
            <img
              src={Faq3}
              alt="Profile 1"
              className="w-20 h-20 rounded-md object-cover"
            />
            <p className="text-sm md:text-base leading-relaxed text-black">
              Wikiwide is a contemporary encyclopedia and recognition platform
              that documents verified profiles of distinguished individuals,
              businesses, institutions, and initiatives across industries.
            </p>
          </div>
          <div className="flex items-start border border-gray-500 rounded-lg p-4 space-x-4">
            <img
              src={Faq4}
              alt="Profile 2"
              className="w-20 h-20 rounded-md object-cover"
            />
            <p className="text-sm md:text-base leading-relaxed text-black">
              Unlike crowd-edited platforms, Wikiwide is curated by a
              professional editorial team ensuring factual accuracy, premium
              presentation, and long-term archival value.
            </p>
          </div>
                    <div className="flex items-start border border-gray-500 rounded-lg p-4 space-x-4">
            <img
              src={Faq5}
              alt="Profile 2"
              className="w-20 h-20 rounded-md object-cover"
            />
            <p className="text-sm md:text-base leading-relaxed text-black">
              Unlike crowd-edited platforms, Wikiwide is curated by a
              professional editorial team ensuring factual accuracy, premium
              presentation, and long-term archival value.
            </p>
          </div>
        </div>

        {/* Right: Text */}
        
      </div>
    </section>











       <section className="bg-black text-white w-full py-12 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-12 px-4 md:px-8">
        {/* Left: Cards */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          <div className="flex items-start border border-gray-500 rounded-lg p-4 space-x-4">
            <img
              src={Faq6}
              alt="Profile 1"
              className="w-20 h-20 rounded-md object-cover"
            />
            <p className="text-sm md:text-base leading-relaxed text-gray-200">
              Wikiwide is a contemporary encyclopedia and recognition platform
              that documents verified profiles of distinguished individuals,
              businesses, institutions, and initiatives across industries.
            </p>
          </div>
          <div className="flex items-start border border-gray-500 rounded-lg p-4 space-x-4">
            <img
              src={Faq7}
              alt="Profile 2"
              className="w-20 h-20 rounded-md object-cover"
            />
            <p className="text-sm md:text-base leading-relaxed text-gray-200">
              Unlike crowd-edited platforms, Wikiwide is curated by a
              professional editorial team ensuring factual accuracy, premium
              presentation, and long-term archival value.
            </p>
          </div>
                    <div className="flex items-start border border-gray-500 rounded-lg p-4 space-x-4">
            <img
              src={Faq8}
              alt="Profile 2"
              className="w-20 h-20 rounded-md object-cover"
            />
            <p className="text-sm md:text-base leading-relaxed text-gray-200">
              Unlike crowd-edited platforms, Wikiwide is curated by a
              professional editorial team ensuring factual accuracy, premium
              presentation, and long-term archival value.
            </p>
          </div>
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            About Wikiwide
          </h2>
          <h3 className="text-lg md:text-xl font-semibold">What is Wikiwide?</h3>
          <h3 className="text-lg md:text-xl font-semibold">
            How is Wikiwide different from other platforms?
          </h3>
          <p className="text-sm md:text-base text-gray-400">
            Understanding our platform.
          </p>
        </div>
      </div>
    </section>












       <section className="text-black w-full py-12 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-12 px-4 md:px-8">
        <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            About Wikiwide
          </h2>
          <h3 className="text-lg md:text-xl font-semibold">What is Wikiwide?</h3>
          <h3 className="text-lg md:text-xl font-semibold">
            How is Wikiwide different from other platforms?
          </h3>
          <p className="text-sm md:text-base text-gray-400">
            Understanding our platform.
          </p>
        </div>
        {/* Left: Cards */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          <div className="flex items-start border border-gray-500 rounded-lg p-4 space-x-4">
            <img
              src={Faq9}
              alt="Profile 1"
              className="w-20 h-20 rounded-md object-cover"
            />
            <p className="text-sm md:text-base leading-relaxed text-black">
              Wikiwide is a contemporary encyclopedia and recognition platform
              that documents verified profiles of distinguished individuals,
              businesses, institutions, and initiatives across industries.
            </p>
          </div>
          <div className="flex items-start border border-gray-500 rounded-lg p-4 space-x-4">
            <img
              src={Faq10}
              alt="Profile 2"
              className="w-20 h-20 rounded-md object-cover"
            />
            <p className="text-sm md:text-base leading-relaxed text-black">
              Unlike crowd-edited platforms, Wikiwide is curated by a
              professional editorial team ensuring factual accuracy, premium
              presentation, and long-term archival value.
            </p>
          </div>

        </div>

        {/* Right: Text */}
        
      </div>
    </section>












    

       <section className="bg-black text-white w-full py-12 mt-24">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:space-x-12 px-4 md:px-8">
        {/* Left: Cards */}
        <div className="flex flex-col space-y-6 md:w-1/2">
          <div className="flex items-start border border-gray-500 rounded-lg p-4 space-x-4">
            <img
              src={Faq11}
              alt="Profile 1"
              className="w-20 h-20 rounded-md object-cover"
            />
            <p className="text-sm md:text-base leading-relaxed text-gray-200">
              Wikiwide is a contemporary encyclopedia and recognition platform
              that documents verified profiles of distinguished individuals,
              businesses, institutions, and initiatives across industries.
            </p>
          </div>
          <div className="flex items-start border border-gray-500 rounded-lg p-4 space-x-4">
            <img
              src={Faq1}
              alt="Profile 2"
              className="w-20 h-20 rounded-md object-cover"
            />
            <p className="text-sm md:text-base leading-relaxed text-gray-200">
              Unlike crowd-edited platforms, Wikiwide is curated by a
              professional editorial team ensuring factual accuracy, premium
              presentation, and long-term archival value.
            </p>
          </div>
                
        </div>

        {/* Right: Text */}
        <div className="md:w-1/2 flex flex-col justify-center mt-8 md:mt-0 space-y-4">
          <h2 className="text-3xl md:text-4xl font-serif font-bold">
            About Wikiwide
          </h2>
          <h3 className="text-lg md:text-xl font-semibold">What is Wikiwide?</h3>
          <h3 className="text-lg md:text-xl font-semibold">
            How is Wikiwide different from other platforms?
          </h3>
          <p className="text-sm md:text-base text-gray-400">
            Understanding our platform.
          </p>
        </div>
      </div>
    </section>
    </div>

}

export default Faq