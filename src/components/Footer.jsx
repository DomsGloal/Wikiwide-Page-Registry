import React from "react";


function Footer(){

    return <>
    
    {/* FOOTER */}
      <div className="bg-white text-center py-12 border-t">
        <h3 className="text-lg md:text-xl font-bold mb-2">
          Your story deserves to be seen, shared, and remembered.
        </h3>
        <p className="text-sm text-gray-600 mb-6">
          Don’t wait for tomorrow. Document your journey. Do it now — for you,
          for your legacy.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 transition">
            Get Started
          </button>
          <button className="border border-black text-black px-6 py-3 rounded-full hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-8">
          © {new Date().getFullYear()} www.wikiwide.org
        </p>
      </div>

    </>

}

export default Footer