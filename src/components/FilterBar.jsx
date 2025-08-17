export default function FilterBar({
  categories,
  selectedCategory,
  onCategoryChange,
  priceRange,
  setPriceRange,
}) {
  return (
    <div className="w-64 bg-white shadow rounded-lg p-4">
      <h3 className="font-semibold text-lg mb-4">Filters</h3>

      {/* Categories */}
      <div className="mb-6">
        <h4 className="font-medium mb-2">Categories</h4>
        <div className="space-y-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="category"
              value="all"
              checked={selectedCategory === "all"}
              onChange={() => onCategoryChange("all")}
            />
            All Products
          </label>
          {categories.map((cat) => (
            <label key={cat} className="flex items-center gap-2">
              <input
                type="radio"
                name="category"
                value={cat}
                checked={selectedCategory === cat}
                onChange={() => onCategoryChange(cat)}
              />
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div>
        <h4 className="font-medium mb-2">Price Range</h4>
        <input
          type="range"
          min="0"
          max="300"
          value={priceRange[1]}
          onChange={(e) => setPriceRange([0, Number(e.target.value)])}
          className="w-full"
        />
        <div className="flex justify-between mt-2 text-sm text-gray-600">
          <span>₹{priceRange[0]}</span>
          <span>₹{priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
}
