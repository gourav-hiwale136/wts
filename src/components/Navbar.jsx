import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);

  // Load user from localStorage whenever login state changes
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    setCurrentUser(user);
  }, [isLoggedIn]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <div className="text-xl font-bold text-blue-600 cursor-pointer" onClick={() => navigate("/")}>
        AdminPanal
      </div>

      {isLoggedIn && currentUser ? (
        <div className="flex items-center space-x-4">
          <div className="text-gray-700">
            <span className="font-semibold">{currentUser.name}</span>{" "}
            <span className="text-sm text-gray-500">({currentUser.role})</span>
          </div>
          <button
            onClick={handleLogout}
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition"
          >
            Logout
          </button>
        </div>
      ) : (
        <div className="flex items-center space-x-4">
          <button
            onClick={() => navigate("/login")}
            className="text-blue-600 font-semibold hover:underline"
          >
            Login
          </button>
          <button
            onClick={() => navigate("/register")}
            className="text-blue-600 font-semibold hover:underline"
          >
            Register
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;