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
    image: "https://media.geeksforgeeks.org/wp-content/uploads/20230617194030/Getting-Started-with-iOS-Development.webp"
  },
  // Add more courses here as needed
];

const Dashboard = ({ toggleWishlist, wishlist, purchasedCourses, purchaseCourse }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Filter courses based on purchase status and search query
  const filteredCourses = courses
    .filter(course => !purchasedCourses.some(pc => pc.id === course.id)) // Exclude purchased courses
    .filter(course => course.title.toLowerCase().includes(searchQuery.toLowerCase())); // Filter by search query

  const handlePurchaseCourse = (course) => {
    purchaseCourse(course); // Call the purchase function passed from the parent
    setSuccessMessage(`Course "${course.title}" successfully purchased!`);
    setTimeout(() => setSuccessMessage(""), 3000); // Clear message after 3 seconds
  };

  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Available Courses</h1>
      
      {/* Success Message Alert */}
      {successMessage && (
        <div className="bg-teal-600 p-4 rounded mb-4">
          <p>{successMessage}</p>
        </div>
      )}

      {/* Search input */}
      <input
        type="text"
        placeholder="Search for a course..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="w-full p-2 mb-6 rounded-lg bg-gray-800 text-white outline-none"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCourses.map(course => (
          <CourseCard 
            key={course.id} 
            course={course} 
            toggleWishlist={toggleWishlist} 
            isWishlisted={wishlist.some((item) => item.id === course.id)}
            purchaseCourse={handlePurchaseCourse} // Use the local purchase function
            showButtons={true} // Show buttons for available courses
          />
        ))}
      </div>

      {/* Message if no courses match the search */}
      {filteredCourses.length === 0 && (
        <p className="text-gray-400 mt-4">No courses found for "{searchQuery}"</p>
      )}
    </div>
  );
};

export default Dashboard;
