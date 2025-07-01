import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-2xl font-serif  mb-2 leading-relaxed">
          Every Remarkable Journey Deserves Its Own Wiki-Style Biography Page - Curated, Verified & Google Searchable. Forever.
          </h1>
          <p className="text-gray-600 mb-6 text-lg">
            Preserve stories. Celebrate lives. Give someone their own digital space on Wikiwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/gift" className="bg-black text-white px-6 py-2 rounded-full hover:opacity-90">
              Gift a Page
            </Link>
            <Link to="/create" className="border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white">
              Create Page
            </Link>
          </div>
          <p className="text-sm text-gray-500 mt-4"> ✨ WikiWide is booming - 25 left</p>
        </div>

        {/* Image Content */}
        <div className="md:w-1/2">
          <img
            src="heroimg01.jpg"
            alt="Device previews"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
