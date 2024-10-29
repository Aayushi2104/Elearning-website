import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg flex flex-col items-center">
      <h2 className="text-xl font-bold mb-2">{course.title}</h2>
      <p className="text-gray-300 mb-4">{course.description}</p>
      <span className="text-teal-400 font-semibold mb-4">{course.price}</span>
      <div className="flex gap-2">
        <button className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600">Buy</button>
        <button className="bg-gray-700 text-white py-2 px-4 rounded hover:bg-gray-600">Add to Cart</button>
      </div>
    </div>
  );
};

export default CourseCard;
