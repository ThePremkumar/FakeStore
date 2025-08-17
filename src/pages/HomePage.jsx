import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import FilterBar from "../components/FilterBar";
import SearchBar from "../components/SearchBar";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 30000]);

  useEffect(() => {
    Promise.all([
      fetch("https://fakestoreapi.com/products").then((res) => res.json()),
      fetch("https://fakestoreapi.com/products/categories").then((res) =>
        res.json()
      ),
    ]).then(([productData, categoryData]) => {
      // Convert USD to INR (approx 1 USD = 83 INR)
      const converted = productData.map((p) => ({
        ...p,
        price: Math.round(p.price * 83),
      }));
      setProducts(converted);
      setCategories(categoryData);
      setLoading(false);
    });
  }, []);

  if (loading) return <p className="text-center mt-10">Loading products...</p>;

  let filteredProducts = products;

  // Category filter
  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === selectedCategory
    );
  }

  // Search filter
  if (query) {
    filteredProducts = filteredProducts.filter((p) =>
      p.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  // Price filter
  filteredProducts = filteredProducts.filter(
    (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-1">Product Catalog</h2>
      <p className="text-gray-600 mb-6">
        Browse our collection of quality products
      </p>

      {/* Search Bar */}
      <SearchBar query={query} setQuery={setQuery} />

      <div className="flex gap-6 mt-6">
        {/* Sidebar */}
        <FilterBar
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 flex-1">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))
          ) : (
            <p className="text-gray-500">No products found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
