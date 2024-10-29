import React from 'react';
import CourseCard from './CourseCard';

const courses = [
  { id: 1, title: "Swift for Beginners", price: "$49", description: "Introductory Swift course" },
  { id: 2, title: "Advanced iOS Development", price: "$99", description: "Deep dive into advanced topics" },
  // Add more courses as needed
];

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-900 text-white min-h-screen">
      <h1 className="text-3xl font-semibold mb-6">Available Courses</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
