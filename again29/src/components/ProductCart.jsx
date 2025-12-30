import { useEffect } from "react";
import { addItem, removeItem, remove2Item, add2Item } from "../toolkit/slice";
import { useDispatch } from "react-redux";
import { productData } from "../toolkit/productSlice";

export default function ProductCard() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(productData());
  }, [dispatch]);
  return (
    <div className="h-screen w-[80%] m-auto bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition">
      {/* Product Image */}
      <img
        src="https://media.gettyimages.com/id/521270846/photo/lord-shiva-and-goddess-parvati-statues-in-rishikesh.jpg?s=612x612&w=gi&k=20&c=kT4crJ5OVPwCncbD9BHt-soRz576By-9yZG-zShI9Ek="
        alt="Product"
        className="w-full h-[70%] object-cover"
      />

      {/* Product Content */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800 mb-2">
          Awesome Product
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          This is a sample product description. It explains the product features
          in simple and clear words so users can understand easily.
        </p>

        {/* Price & Button */}
        <div className="flex items-center justify-between">
          <span className="text-lg font-semibold text-green-600">₹499</span>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
            onClick={() => dispatch(addItem())}
          >
            Add to Cart
          </button>

          <button
            className="bg-red-700 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
            onClick={() => dispatch(removeItem())}
          >
            Remove to Cart
          </button>

          <button
            className="bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
            onClick={() => dispatch(add2Item(5))}
          >
            payloadAdd to Cart
          </button>

          <button
            className="bg-orange-700 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
            onClick={() => dispatch(remove2Item(5))}
          >
            PayloadRemove to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
