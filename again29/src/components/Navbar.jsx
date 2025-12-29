import { ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";

export default function Navbar() {
  const data = useSelector((state) => state.cart.value);
  return (
    <nav className="w-full h-16 bg-white shadow-md flex items-center justify-between px-8">
      {/* Left: Logo */}
      <div className="text-2xl font-bold text-blue-600">MyShop</div>

      {/* Center: Menu */}
      <ul className="flex gap-8 text-gray-700 font-medium">
        <li className="cursor-pointer hover:text-blue-600 transition">Home</li>
        <li className="cursor-pointer hover:text-blue-600 transition">
          Product
        </li>
        <li className="cursor-pointer hover:text-blue-600 transition">About</li>
        <li className="cursor-pointer hover:text-blue-600 transition">
          Sign In
        </li>
      </ul>

      {/* Right: Cart */}
      <div className="relative cursor-pointer">
        <ShoppingCart className="w-6 h-6 text-gray-700" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
          {data}
        </span>
      </div>
    </nav>
  );
}
