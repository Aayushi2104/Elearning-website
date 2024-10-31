// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import MyCourse from './MyCourse';
import CourseDetails from './CourseDetails';
import WishlistPage from './WishlistPage';
import QuizComponent from './QuizComponent';
import Chat from './Chat'; 
import AccountPage from './AccountPage';
import Certificate from './Certificate'; // Import the AccountPage component

const App = () => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (course) => {
    if (wishlist.some((item) => item.id === course.id)) {
      setWishlist(wishlist.filter((item) => item.id !== course.id));
    } else {
      setWishlist([...wishlist, course]);
    }
  };

  return (
    <Router>
      <div className="flex w-full h-screen bg-gray-900 text-white">
        <Sidebar />
        <div className="flex-1 p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard toggleWishlist={toggleWishlist} wishlist={wishlist} />} />
            <Route path="/my-course" element={<MyCourse />} />
            <Route path="/course-details" element={<CourseDetails />} />
            <Route path="/wishlist" element={<WishlistPage wishlist={wishlist} />} />
            <Route path="/course/:courseId" element={<CourseDetails />} />
            <Route path="/skill-tests" element={<QuizComponent />} /> 
            <Route path="/messages" element={<Chat />} /> 
            <Route path="/certificates" element={<Certificate />} />{/* Route for Chat */}
            <Route path="/account" element={<AccountPage />} /> 
            {/* New Account Page Route */}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
