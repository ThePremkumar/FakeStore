import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white px-6 py-4 shadow-lg flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">FakeStore</Link>
      <div className="flex gap-6">
        <Link to="/" className="hover:text-gray-200">Home</Link>
      </div>
    </nav>
  );
}
