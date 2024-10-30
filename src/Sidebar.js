import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-800 p-4">
      <div className="text-2xl font-bold text-teal-400 mb-6">Core Developer</div>
      <ul className="space-y-4">
        <li className="hover:bg-teal-600 px-3 py-2 rounded cursor-pointer">
          <Link to="/">Dashboard</Link>
        </li>
        <li className="hover:bg-teal-600 px-3 py-2 rounded cursor-pointer">
          <Link to="/my-course">My Courses</Link>
        </li>
        <li className="hover:bg-teal-600 px-3 py-2 rounded cursor-pointer">
          <Link to="/course-details">Course Details</Link>
        </li>
        <li className="hover:bg-teal-600 px-3 py-2 rounded cursor-pointer">
          <Link to="/explore">Explore</Link>
        </li>
        <li className="hover:bg-teal-600 px-3 py-2 rounded cursor-pointer">
          <Link to="/messages">Messages</Link>
        </li>
        <li className="hover:bg-teal-600 px-3 py-2 rounded cursor-pointer">
          <Link to="/skill-tests">Skill Tests</Link>
        </li>
        <li className="hover:bg-teal-600 px-3 py-2 rounded cursor-pointer">
          <Link to="/certificates">Certificates</Link>
        </li>
        <li className="hover:bg-teal-600 px-3 py-2 rounded cursor-pointer">
          <Link to="/settings">Settings</Link>
        </li>
        <li className="hover:bg-teal-600 px-3 py-2 rounded cursor-pointer">
          <Link to="/account">Account</Link>
        </li>
        <li className="hover:bg-teal-600 px-3 py-2 rounded cursor-pointer">
          <Link to="/wishlist">Wishlist</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
