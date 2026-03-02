import { useEffect, useState } from "react";

const Dashboard = ({ isLoggedIn }) => {
  const [user, setUser] = useState(null);

  // Update user whenever login state changes
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, [isLoggedIn]);

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100">
        <p className="text-gray-500 text-lg">Loading your dashboard...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            Welcome, {user.name}!
          </h1>
          <p className="text-gray-600 mb-6">
            You are successfully logged in. This is your personalized dashboard.
          </p>

          {/* Example dashboard content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">Your Profile</h2>
              <p className="text-gray-700">Email: {user.email}</p>
            </div>

            <div className="bg-green-100 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold mb-2">Quick Actions</h2>
              <ul className="text-gray-700 list-disc list-inside">
                <li>Update your profile</li>
                <li>View analytics</li>
                <li>Manage settings</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;