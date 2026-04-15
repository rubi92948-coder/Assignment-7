import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-6xl font-bold text-red-500">404</h1>

      <h2 className="text-2xl font-semibold mt-4 text-gray-800">
        Page Not Found
      </h2>

      <p className="text-gray-500 mt-2">
        Oops! The page you are looking for does not exist.
      </p>

      <Link
        to="/"
        className="mt-6 bg-green-900 hover:bg-green-800 text-white px-5 py-2 rounded-lg"
      >
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;