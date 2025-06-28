import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="sticky top-0 z-50 bg-black/90 backdrop-blur text-white px-6 py-4 flex justify-between items-center shadow-lg">
      <Link
        to="/"
        className="text-2xl font-bold text-yellow-300 hover:scale-105 transition-all duration-300"
      >
        SkillSwap
      </Link>

      <div className="space-x-6 text-white font-medium flex items-center">
        {!isLoggedIn ? (
          <>
            <Link to="/register" className="hover:text-yellow-300 transition duration-200">
              Register
            </Link>
            <Link to="/login" className="hover:text-yellow-300 transition duration-200">
              Login
            </Link>
          </>
        ) : (
          <>
            <Link to="/dashboard" className="hover:text-yellow-300 transition duration-200">
              Dashboard
            </Link>
            <button
              onClick={handleLogout}
              className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-1 rounded-full transition"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
