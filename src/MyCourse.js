import React from 'react';

import { Link } from 'react-router-dom'; 


const MyCourse = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      

      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Course Header */}
        <div className="mb-6">
          <h2 className="text-3xl font-semibold">Swift for Intermediate and Advanced iOS Developers</h2>
          <p className="text-gray-400">Mohammad Azam</p>
          <div className="flex items-center space-x-4 mt-4">
            <span className="bg-gray-700 px-2 py-1 rounded text-sm">Enums</span>
            <span className="bg-gray-700 px-2 py-1 rounded text-sm">Optionals</span>
            <span className="bg-gray-700 px-2 py-1 rounded text-sm">Advanced iOS</span>
          </div>
          <div className="mt-4">
            <div className="bg-gray-700 w-full rounded-full h-2">
              <div className="bg-teal-400 h-2 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex justify-between text-sm text-gray-400 mt-1">
              <span>4/76 lessons</span>
              <span>2/35 practical works</span>
              <span>5/100 progress</span>
              <span>0/1 final project</span>
            </div>
          </div>
        </div>

        {/* Topic Section */}
        <div className="bg-gray-800 p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-4">Topic 1 - Understanding Swift Collections</h3>
          <div className="space-y-4">
            {/* Lesson Item */}
            {['Iterating', 'Filter', 'Lazy Iteration', 'Reduce Into'].map((lesson, index) => (
              <div key={index} className="flex items-center justify-between bg-gray-700 p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-teal-600 p-3 rounded-full">
                    <img src="/path/to/icon.png" alt="icon" className="w-6 h-6" /> {/* Placeholder for icon */}
                  </div>
                  <div>
                    <h4 className="text-lg">{lesson}</h4>
                    <p className="text-sm text-gray-400">08:20 · 2 tasks</p>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-green-500">&#10003;</span> {/* Check icon */}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Description and Details */}
        <div className="flex">
          <div className="w-2/3 pr-4">
            <h3 className="text-xl font-semibold mb-2">Course Description</h3>
            <p className="text-gray-400">In this course, you will take a deep dive into Swift features and learn the modern way of writing apps using Swift language...</p>
          </div>
          <div className="w-1/3">
            <h3 className="text-xl font-semibold mb-2">Course Details</h3>
            <ul className="text-gray-400 space-y-2">
              <li>17K learners</li>
              <li>29 Aug, 2022 last updated</li>
              <li>Medium level</li>
              <li>Full lifetime access</li>
              <li>English, Spanish</li>
              <li>Access on laptop, tablet, and phone</li>
              <li>Certificate of completion</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};



export default MyCourse;
