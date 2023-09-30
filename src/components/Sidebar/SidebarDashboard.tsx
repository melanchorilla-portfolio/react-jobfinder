import { Link } from "react-router-dom";

const SidebarDashboard = () => {
  return (
    <div className="">
      <ul className="space-y-2 p-4">
            <li><Link to="/dashboard" className="block hover:bg-gray-700 hover:text-slate-200 px-4 py-2">Dashboard</Link></li>
            <li><Link to="/dashboard/job-vacancy-list" className="block hover:bg-gray-700 hover:text-slate-200 px-4 py-2">Job vacancy list</Link></li>
            <li><Link to="/dashboard/job-vacancy-list/form" className="block hover:bg-gray-700 hover:text-slate-200 px-4 py-2">Add data</Link></li>
            <li><Link to="/dashboard/profile" className="block hover:bg-gray-700 hover:text-slate-200 px-4 py-2">Profile</Link></li>
            <li><Link to="/dashboard/change-password" className="block hover:bg-gray-700 hover:text-slate-200 px-4 py-2">Change password</Link></li>
        </ul>
    </div>
  );
};

export default SidebarDashboard;
