import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <header className="bg-slate-800 text-white shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center py-3">
        <div className="flex items-center">
          <Link to="/home">
            <h1 className="font-bold text-white text-2xl">Authentication</h1>
          </Link>
        </div>

        <nav className="hidden md:flex space-x-8">
          {currentUser && (
            <Link
              to="/home"
              className="hover:text-rose-500 transition duration-300 font-semibold"
            >
              Home
            </Link>
          )}
          {currentUser && (
            <Link
              to="/about"
              className="hover:text-rose-500 transition duration-300 font-semibold"
            >
              About
            </Link>
          )}
          <Link
            to="/profile"
            className="flex items-center space-x-2 font-bold"
          >
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <span className="text-rose-600 hover:text-gray-400 transition duration-300">
                Sign In
              </span>
            )}
          </Link>
        </nav>

        <div className="md:hidden">
          <button className="text-gray-300 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
