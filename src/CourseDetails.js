import React from 'react';

const CourseDetails = () => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg flex-1">
      <h2 className="text-teal-400 text-xl mb-4">Course Description</h2>
      <p className="text-gray-300 mb-4">
        In this course, you will take a deep dive into Swift features and learn the modern way of writing apps using Swift language...
      </p>
      <h2 className="text-teal-400 text-xl mb-4">Course Details</h2>
      <ul className="space-y-2">
        <li className="text-gray-300">17K learners</li>
        <li className="text-gray-300">29 Aug, 2022 last updated</li>
        <li className="text-gray-300">Medium level</li>
        <li className="text-gray-300">Full lifetime access</li>
        <li className="text-gray-300">English, Spanish</li>
        <li className="text-gray-300">Access on laptop, tablet, and phone</li>
        <li className="text-gray-300">Certificate of completion</li>
      </ul>
    </div>
  );
};

export default CourseDetails;
