// CourseCard.js
import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg text-center flex flex-col items-center transform transition-transform duration-300 hover:scale-105">
      {/* Thumbnail Image */}
      <img
        src={course.image}
        alt={`${course.title} thumbnail`}
        className="w-full h-40 object-cover rounded-md mb-4"
      />

      {/* Course Title */}
      <h2 className="text-xl font-bold mb-2">{course.title}</h2>

      {/* Course Description */}
      <p className="text-gray-300 mb-4">{course.description}</p>

      {/* Course Price */}
      <span className="text-teal-400 font-semibold mb-4">{course.price}</span>

      {/* Action Buttons */}
      <div className="flex gap-2 mt-4">
        <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">Buy</button>
        <button className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600">Add to Cart</button>
      </div>
    </div>
  );
};

export default CourseCard;
