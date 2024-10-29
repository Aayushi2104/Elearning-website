import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard'; // Create a simple component for Dashboard
import MyCourse from './MyCourse'; // Create a simple component for My Courses
import CourseDetails from './CourseDetails'
import Header from './Header';

const App = () => {
  return (
    <Router>
      <div className="flex w-full h-screen bg-gray-900 text-white">
        <Sidebar />
        <div className="flex-1 p-6 overflow-y-auto">
          <Header />
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/my-course" element={<MyCourse />} />
            <Route path="/course-details" element={<CourseDetails />} />
            {/* <Route path="/course-list" element={<CourseList />} /> */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
