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
    const [priceRange, setPriceRange] = useState([0, 300]);

    useEffect(() => {
        Promise.all([
            fetch("https://fakestoreapi.com/products").then((res) => res.json()),
            fetch("https://fakestoreapi.com/products/categories").then((res) =>
                res.json()
            ),
        ]).then(([productData, categoryData]) => {
            const converted = productData.map((p) => ({
                ...p,
                price: p.price.toFixed(2),
            }));
            setProducts(converted);
            setCategories(categoryData);
            setLoading(false);
        });
    }, []);

    if (loading) return <p className="text-center mt-10">Loading products...</p>;

    let filteredProducts = products;

    if (selectedCategory !== "all") {
        filteredProducts = filteredProducts.filter(
            (p) => p.category === selectedCategory
        );
    }

    if (query) {
        filteredProducts = filteredProducts.filter((p) =>
            p.title.toLowerCase().includes(query.toLowerCase())
        );
    }

    filteredProducts = filteredProducts.filter(
        (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    return (
        <div className="p-4 sm:p-6">
            <h2 className="text-xl sm:text-2xl font-bold mb-1 text-center sm:text-left">
                Product Catalog
            </h2>
            <p className="text-gray-600 mb-6 text-center sm:text-left">
                Browse our collection of quality products
            </p>

            {/* Search Bar */}
            <div className="mb-4">
                <SearchBar query={query} setQuery={setQuery} />
            </div>

            {/* Layout: stack on mobile, side-by-side on larger screens */}
            <div className="flex flex-col lg:flex-row gap-6 mt-6">
                {/* Sidebar */}
                <div className="lg:w-1/4 w-full">
                    <FilterBar
                        categories={categories}
                        selectedCategory={selectedCategory}
                        onCategoryChange={setSelectedCategory}
                        priceRange={priceRange}
                        setPriceRange={setPriceRange}
                    />
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 flex-1">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))
                    ) : (
                        <p className="text-gray-500 col-span-full text-center">
                            No products found.
                        </p>
                    )}
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-10 text-center text-gray-600 text-sm">
                <a
                    href="https://www.linkedin.com/in/thepremkumar/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                >
                    Contact Us Mr PK
                </a>
            </footer>
        </div>
    );
}
