export default function SearchBar({ query, setQuery }) {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border rounded-lg px-4 py-2 w-full"
      />
    </div>
  );
}
