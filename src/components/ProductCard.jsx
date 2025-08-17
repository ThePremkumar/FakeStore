export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-4"
      />
      <h3 className="font-semibold text-gray-800 line-clamp-2">
        {product.title}
      </h3>
      <p className="text-gray-600 text-sm line-clamp-2 mb-2">
        {product.description}
      </p>
      <p className="font-bold text-lg mt-auto">₹{product.price}</p>
      <button className="text-blue-600 text-sm mt-2 hover:underline">
        View details
      </button>
    </div>
  );
}
