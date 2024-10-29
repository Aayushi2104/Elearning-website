import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Sidebar from './Sidebar';
import Dashboard from './Dashboard'; // Simple component for Dashboard
import MyCourse from './MyCourse'; // Simple component for My Courses
import CourseDetails from './CourseDetails';

const App = () => {
  return (
    <Router>
      <div className="flex w-full h-screen bg-gray-900 text-white">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <Routes>
            {/* Main Routes */}
            <Route path="/" element={<Dashboard />} />
            <Route path="/my-course" element={<MyCourse />} />

            {/* Dynamic Course Details Route with courseId parameter */}
            <Route path="/course/:courseId" element={<CourseDetails />} />
            
            {/* Optional route for other course-related components, if needed */}
            {/* <Route path="/course-list" element={<CourseList />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
