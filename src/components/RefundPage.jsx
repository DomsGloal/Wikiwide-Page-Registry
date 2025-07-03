import React from "react";

import Nonrefund from '../assets/NonRefund.jpg'
import Addition from '../assets/additionalFee.jpg'
import Service from '../assets/service.png'
import Write from '../assets/write.png'
import Commom from '../assets/common.png'


const RefundEligibility = () => {
  return (
    <div className="max-w-6xl ml-auto mr-auto mx-auto px-4 py-12 text-gray-800 space-y-16">



        <div className="max-w-4xl mx-auto text-center px-6 py-12">
        <h1 className="text-2xl md:text-4xl font-bold font-serif  mb-4">
          Refund and Returns <br className="hidden md:block" />
          Policy 
        </h1>
        <p className="text-sm md:text-base text-gray-700 mb-6">
          Effective Date : [Date] 
        </p>
        

      </div>

      {/* Top Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
     <div className="flex flex-row  gap-4 p-4 rounded-lg p-7 md:p-5  bg-black text-white border shadow-md h-full">
  <img
    src={Nonrefund}
    alt="Non-Refundable"
    className="w-24 md:pt-14 lg:pt-7  sm:w-24 md:w-20 object-contain self-start"
  />
  <div className="text-left ">
    <h3 className="font-semibold  text-lg">Non-Refundable Application Fee</h3>
    <p className="text-sm mt-1">
      Application fees are non-refundable, includ...
    </p>
  </div>
</div>


        <div className="p-6 rounded-lg  shadow-md flex flex-col justify-center items-center">
          <h2 className="text-2xl font-bold mb-2">Refund Eligibility</h2>
          <p className="text-sm text-gray-600 text-center max-w-xs">
            Understanding the criteria for refund eligibility.
          </p>
        </div>

        <div className="p-6 rounded-lg border shadow-md">
          <img
            src={Addition}
            alt="Additional Fees"
            className="mx-auto w-14 mb-4"
          />
          <h3 className="font-semibold text-lg">Additional Fees</h3>
          <p className="text-sm mt-2 text-gray-600">
            Fees associated with editors are handled separately.
          </p>
        </div>
      </section>

      {/* No Refunds Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 items-start">
        <div>
          <h1 className="text-3xl font-serif  font-bold mb-2">No Refunds in These Cases</h1>
          <p className="text-sm text-gray-600">
            Avoid these situations to ensure eligibility for refunds.
          </p>
        </div>

        <div className="border rounded-lg p-5 flex items-start gap-4 shadow-sm">
          <img
            src={Commom}
            alt="Common Exceptions"
            className="w-12 mt-1"
          />
          <div>
            <h4 className="font-semibold mb-1">Common Exceptions</h4>
            <ul className="text-sm list-disc list-inside text-gray-700">
              <li>Change of mind</li>
              <li>Not proceeding after a connection...</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Exceptional Circumstances */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 items-start">
        <div>
          <h3 className="text-3xl font-serif font-bold mb-2">Exceptional Circumstances</h3>
          <p className="text-sm text-gray-600">
            Scenarios where refunds may be considered.
          </p>
        </div>

        <div className="bg-black text-white p-6 rounded-lg shadow-md">
            <div className="flex">
           <div>
             <img src={Write} alt="" />
           </div>
        <div>
              <h4 className="font-semibold text-lg mb-2">Criteria</h4>
          <p className="text-sm">
            Refunds are only granted for duplicate or technical errors. To request, please email
            <a href="mailto:help@wikiwide.org" className="underline ml-1">help@wikiwide.org</a>.
          </p>
</div>
        </div>
                  <div className="flex flex-wrap gap-2 mt-3 text-xs">
            <span className="bg-gray-800 px-2 py-1 rounded">Deadline: 48 hours</span>
            <span className="bg-gray-800 px-2 py-1 rounded">Proof of payment required</span>
          </div>
        </div>
      </section>

      {/* Transparency & Trust */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-32 items-start">
        <div>
          <h3 className="text-3xl font-serif font-bold mb-2">Transparency & Trust</h3>
          <p className="text-sm text-gray-600">
            Building trust with our clients.
          </p>
        </div>

        <div className="border rounded-lg p-5 flex items-start gap-4 shadow-sm">
          <img
            src={Service}
            alt="Service Assurance"
            className="w-12 mt-1"
          />
          <div>
            <h4 className="font-semibold mb-1">Service Assurance</h4>
            <p className="text-sm text-gray-700">
              No refunds are granted for editorial services, but personal attention and review are guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
    <section className="grid grid-cols-1 md:grid-cols-2 mt-32 gap-10 items-start py-10">
  {/* Left side text */}
  <div>
    <h3 className="text-3xl font-serif font-bold mb-3">Contact Us for Support</h3>
    <p className="text-base text-gray-600">
      If you have further questions or need assistance.
    </p>
  </div>

  {/* Right side form */}
  <form className="space-y-6 max-w-lg w-full">
    <div>
      <label className="block text-sm font-medium mb-1">Email Address</label>
      <input
        type="email"
        placeholder="example@wikiwide.org"
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-black/30"
        required
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-1">Message</label>
      <textarea
        placeholder="Type your message here..."
        rows={4}
        className="w-full border border-gray-300 p-3 rounded-md focus:outline-none focus:ring focus:ring-black/30"
        required
      ></textarea>
    </div>

    <div className="flex gap-4">
      <button
        type="reset"
        className="px-6 py-2 border border-gray-500 text-gray-700 rounded-md hover:bg-gray-100 transition"
      >
        Cancel
      </button>
      <button
        type="submit"
        className="px-6 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition"
      >
        Submit
      </button>
    </div>
  </form>
</section>
    </div>
  );
};

export default RefundEligibility;
