import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="bg-slate-800 text-white">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link to="/home">
          <h1 className="font-bold text-white">Auth App</h1>
        </Link>
        <ul className="flex gap-4">
          {currentUser && (
            <Link to="/home" className="font-semibold">
              <li>Home</li>
            </Link>
          )}
          {currentUser && (
            <Link to="/about" className="font-semibold">
              <li>About</li>
            </Link>
          )}

          <Link to="/profile" className="font-bold">
            {currentUser ? (
              <img
                src={currentUser.profilePicture}
                alt="profile"
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li>Sign In</li>
            )}
          </Link>
        </ul>
      </div>
    </div>
  );
}
