import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-100 shadow p-4 flex justify-between">
      <h1 className="text-xl font-bold">GuarantiX</h1>
      <div className="flex space-x-4">
        <Link to="/" className="hover:underline">Главная</Link>
        <Link to="/dashboard" className="hover:underline">Личный кабинет</Link>
      </div>
    </nav>
  );
}

export default Navbar;
