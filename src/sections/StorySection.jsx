import React, { useState } from 'react';

import StoryCard from '../components/StoryCard';
import { FaUserMd, FaGavel, FaPaintBrush } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FiPlus, FiX } from "react-icons/fi";
import Doctor from '../assets/HumanDoctor.jpg'
import Lawyer from '../assets/human_lawyer.jpg'
import Artist from '../assets/human_artist.jpg'

const faqs = [
  {
    question: "How long does it take to go live?",
    answer:
      "Your article is created and published within 5-10 working days from the time we receive your information.",
  },
  { question: "Will my page appear on Google?", answer: "Yes!" },
  { question: "Can I gift a page to someone?", answer: "Absolutely!" },
  { question: "Who is this for?", answer: "Anyone with a story worth sharing." },
  { question: "Is this like Wikipedia?", answer: "No, we are not affiliated." },
  { question: "Can I edit my page later?", answer: "Of course!" },
];



const StorySection = () => {

    const [activeFaq, setActiveFaq] = useState(0);


  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Headline */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-2">
          Finally, a Place Where <br className="hidden md:block" />
          Your Story Gets the Spotlight
        </h1>
        <p className="text-gray-600 text-base font-sans">
          Your moments matter, let's preserve them.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StoryCard
          tag="Best Seller"
          image="storyimg-national.jpg"
          title="Create Page"
          subtitle="Capture your story now"
        />
        <StoryCard
          tag="Trending"
          image="storyimg-ratna.jpg"
          title="Gift a Page"
          subtitle="Share a narrative"
        />
        <StoryCard
          tag="Get Involved"
          image="storyimg-annath.jpg"
          title="Nominate"
          subtitle="Empower a great journey"
        />
      </div>
 
    <section className="bg-black text-white w-full mt-14">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between py-12 px-6  space-y-8 md:space-y-0">
        {/* Left: Headings */}
        <div className="md:w-1/2 text-left pl-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4 ">
            Who Should Create a <br /> Wikiwide Page?
          </h2>
          <p className="text-sm text-gray-300">
            If you&apos;ve done something worth documenting... this is for you.
          </p>
        </div>

        {/* Right: Items */}
        <div className="md:w-1/2 flex flex-col space-y-6 pl-24">
           <div className="flex items-center  space-x-4">
    <img src={Doctor} alt="Doctor Icon" className="w-16 h-16 rounded-full object-cover" />
    <div>
      <h3 className="font-semibold">Doctors</h3>
      <p className="text-sm text-gray-300">Share your expertise.</p>
    </div>
  </div>          <div className="flex items-start space-x-4">
            <div className="text-3xl"><img src={Lawyer} alt=""  className="w-16 h-16 rounded-full object-cover" />
            
            
            
            </div>
            <div>
              <h3 className="font-semibold">Lawyers</h3>
              <p className="text-sm text-gray-300">Establish your legacy.</p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <div className="text-3xl"><img src={Artist} className="w-16 h-16 rounded-full object-cover" alt="" /> </div>
            <div>
              <h3 className="font-semibold">Artists</h3>
              <p className="text-sm text-gray-300">Display your journey.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer text */}
      <div className="max-w-6xl mx-auto py-6 px-6 flex flex-col md:flex-row items-center justify-between text-sm text-black space-y-4 md:space-y-0 bg-white">
        <p className="text-center md:text-left flex-1 border-b md:border-b-0 md:border-r md:pr-4">
          Your story deserves to be seen...
        </p>
        <p className="text-center md:text-left flex-1 border-b md:border-b-0 md:border-r md:px-4">
          Don&apos;t wait... take action now!
        </p>
        <p className="text-center md:text-left flex-1 md:pl-4">
          Disclaimer: Not affiliated with Wikipedia...
        </p>
      </div>
    </section>









      <section className="w-full bg-white text-black">
      {/* STORIES */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Stories That Inspire
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="bg-black text-white rounded-lg p-4 flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2 text-yellow-400">
                {Array.from({ length: 5 }).map((_, starIdx) => (
                  <FaStar key={starIdx} />
                ))}
              </div>
              <p className="text-sm italic">
                “This is a sample testimonial text. Replace with real stories
                from your users for authenticity.”
              </p>
              <p className="text-xs text-gray-400">— Sample Name</p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b pb-4 cursor-pointer"
              onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-semibold">{faq.question}</h3>
                {activeFaq === index ? (
                  <FiX className="text-xl" />
                ) : (
                  <FiPlus className="text-xl" />
                )}
              </div>
              {activeFaq === index && (
                <p className="text-sm text-gray-600 mt-2">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>

      
    </section>
    </section>

  );
};

export default StorySection;
