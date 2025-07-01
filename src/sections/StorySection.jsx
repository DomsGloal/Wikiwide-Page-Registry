import React from 'react';
import StoryCard from '../components/StoryCard';

const StorySection = () => {
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
    </section>
  );
};

export default StorySection;
