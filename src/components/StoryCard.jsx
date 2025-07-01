import React from 'react';

const StoryCard = ({ tag, image, title, subtitle }) => {
  return (
    <div className="border rounded-xl p-6 bg-white relative shadow-sm hover:shadow-md transition">
      {/* Tag Badge */}
      <span className="absolute top-4 left-4 bg-yellow-300 text-xs font-semibold px-2 py-0.5 rounded-md">
        {tag}
      </span>

      {/* Image */}
      <img
        src={image}
        alt={title}
        className="mx-auto mb-4 h-64 object-contain"
      />

      {/* Text Block - Left Aligned */}
      <div className="text-left">
        <h4 className="text-gray-800 font-medium text-base">{title}</h4>
        <p className="font-serif text-lg font-semibold text-gray-900 mt-1">
          {subtitle}
        </p>
      </div>
    </div>
  );
};

export default StoryCard;
