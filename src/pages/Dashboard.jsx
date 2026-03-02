import { useEffect, useState } from "react";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(allUsers);

    const loggedInUser = JSON.parse(localStorage.getItem("user"));
    setCurrentUser(loggedInUser);
  }, []);

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Welcome {currentUser.name} ({currentUser.role})!
        </h1>
        <p className="text-gray-600 mb-8">Registered users:</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {users.map((user, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl shadow transition hover:shadow-lg ${
                currentUser.email === user.email
                  ? "bg-blue-100"
                  : user.role === "admin"
                  ? "bg-yellow-100"
                  : "bg-white"
              }`}
            >
              <h2 className="text-xl font-semibold mb-1">
                {user.name} ({user.role})
              </h2>
              <p className="text-gray-700">Email: {user.email}</p>
              <p className="text-gray-500 text-sm">Password: {user.password}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;