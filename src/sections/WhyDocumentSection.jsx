import React from 'react';
import { Link } from 'react-router-dom';

const WhyDocumentSection = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-12 text-center">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-serif font-bold leading-tight mb-2">
        What Happens when your <br /> story isn’t Documented?
      </h2>
      <p className="text-gray-600 mb-10 leading-relaxed">
        Learn the consequences of not capturing your story.
      </p>

      <div className="grid gap-4 md:grid-cols-3 max-w-5xl mx-auto mb-10">
        {/* Card 1 */}
        <div className="bg-gray-900 text-white rounded-lg p-4 flex items-start gap-4">
          <img
            src="sec02-img01.jpg"
            alt="Not Indexed"
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h3 className="text-base font-semibold mb-1">Not Indexed</h3>
            <p className="text-sm text-gray-300">
              Your achievements may remain unrecognized.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-900 text-white rounded-lg p-4 flex items-start gap-4">
          <img
            src="sec02-img02.jpg"
            alt="Lost Memories"
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h3 className="text-base font-semibold mb-1">Lost Memories</h3>
            <p className="text-sm text-gray-300">
              Don’t let your story fade away over time.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-900 text-white rounded-lg p-4 flex items-start gap-4">
          <img
            src="sec02-img03.jpg"
            alt="Missed Opportunities"
            className="w-16 h-16 rounded object-cover"
          />
          <div>
            <h3 className="text-base font-semibold mb-1">Missed Opportunities</h3>
            <p className="text-sm text-gray-300">
              Potential connections or opportunities might be overlooked.
            </p>
          </div>
        </div>
      </div>


      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
        <Link to="/gift" className="border border-black text-black px-6 py-2 rounded-full hover:bg-black hover:text-white">
          Gift
        </Link>
        <Link to="/create" className="bg-black text-white px-6 py-2 rounded-full hover:opacity-90">
          Start My Page
        </Link>
      </div>

      {/* Feature Tags */}
      <section className="max-w-3xl mx-auto text-center px-4">
        <div className="flex flex-wrap justify-center gap-6 text-md text-gray-800 font-sans font-bold mb-6">
          <div className="flex items-center gap-4">
            ✅ <span>Google Indexed</span>
          </div>
          <span className="hidden md:inline-block border-l border-gray-400 h-5" />
          <div className="flex items-center gap-4">
            ✅ <span>Lifetime access</span>
          </div>
          <span className="hidden md:inline-block border-l border-gray-400 h-5" />
          <div className="flex items-center gap-4">
            ✅ <span>Instant Delivery</span>
          </div>
        </div>
      </section>



    </section>
  );
};

export default WhyDocumentSection;
