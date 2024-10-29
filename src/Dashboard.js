// Dashboard.js
import React, { useState } from 'react';
import CourseCard from './CourseCard';

const courses = [
  { 
    id: 1, 
    title: "Swift for Beginners", 
    price: "$49", 
    description: "Introductory Swift course",
    image: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/2152605297/settings_images/2df23d0-63-8161-fd-bffd5ec17c0_Swift_Basics_Thumbnails_Keynote.001.jpeg"
  },
  { 
    id: 2, 
    title: "Advanced iOS Development", 
    price: "$99", 
    description: "Deep dive into advanced topics",
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20230617194030/Getting-Started-with-iOS-Development.webp" // Replace with a valid image URL
  },
  // Add more courses as needed
];

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Available Courses</h1>
      
      {/* Search Input */}
      <input
        type="text"
        placeholder="Search for a course..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 mb-6 rounded-lg bg-gray-800 text-white outline-none"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Display message if no courses are found */}
      {filteredCourses.length === 0 && (
        <p className="text-gray-400 mt-4">No courses found for "{searchQuery}"</p>
      )}
    </div>
  );
};

export default Dashboard;
